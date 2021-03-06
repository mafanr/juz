package search

import (
	"sort"
	"strings"

	"github.com/imdotdev/im.dev/server/internal/interaction"
	"github.com/imdotdev/im.dev/server/internal/story"
	"github.com/imdotdev/im.dev/server/pkg/db"
	"github.com/imdotdev/im.dev/server/pkg/log"
	"github.com/imdotdev/im.dev/server/pkg/models"
)

var logger = log.RootLogger.New("logger", "search")

func Posts(user *models.User, filter, query string) []*models.Story {
	posts := make([]*models.Story, 0)

	// postsMap := make(map[string]*models.Post)

	// search by title
	sqlq := "%" + query + "%"
	rows, err := db.Conn.Query("select id,type,slug,title,url,cover,brief,creator,created,updated from story where status=? and  (title LIKE ? or brief LIKE ?)", models.StatusPublished, sqlq, sqlq)
	if err != nil {
		logger.Warn("get user posts error", "error", err)
		return posts
	}

	posts = story.GetPosts(user, rows)

	if filter == models.FilterFavorites {
		sort.Sort(models.FavorStories(posts))
	} else {
		sort.Sort(models.Stories(posts))
	}

	return posts
}

func Users(user *models.User, filter, query string) []*models.User {
	users := make(models.Users, 0)
	for _, u := range models.UsersCache {
		if strings.Contains(strings.ToLower(u.Nickname), strings.ToLower(query)) {
			users = append(users, u)
			continue
		}

		if strings.Contains(strings.ToLower(u.Username), strings.ToLower(query)) {
			users = append(users, u)
			continue
		}
	}

	for _, u := range users {
		u.Followed = interaction.GetFollowed(u.ID, user.ID)
	}

	sort.Sort(users)
	return users
}
