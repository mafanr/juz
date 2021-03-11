import { getSvgIcon } from 'components/svg-icon'
import React from 'react'
import { FaFileAlt, FaScroll, FaBookOpen, FaTags, FaUserCircle, FaRegFile, FaUser, FaRegUser } from 'react-icons/fa'
import { Route } from 'src/types/route'
import { SearchFilter } from 'src/types/search'
import { ReserveUrls } from './reserve-urls'
export const editorLinks: Route[] = [{
    title: '文章',
    path: `${ReserveUrls.Editor}/posts`,
    icon: getSvgIcon("post"),
    disabled: false
},
{
    title: '草稿',
    path: `${ReserveUrls.Editor}/drafts`,
    icon: getSvgIcon("drafts"),
    disabled: false
},
{
    title: '系列',
    path: `${ReserveUrls.Editor}/series`,
    icon: getSvgIcon("series"),
    disabled: false
}
]

export const followLinks: any[] = [
    {
        title: 'Following tags',
        path: `${ReserveUrls.Follow}/tags`,
        disabled: false
    },
    {
        title: 'Following users',
        path: `${ReserveUrls.Follow}/users`,
        disabled: false
    },
    {
        title: 'Followers',
        path: `${ReserveUrls.Follow}/followers`,
        disabled: false
    },
]

export const searchLinks: any[] = [{
    title: '文章',
    path: `${ReserveUrls.Search}/posts`,
    icon: getSvgIcon("post"),
    disabled: false,
    filters: [SearchFilter.Favorites,SearchFilter.Recent]
},
{
    title: '用户',
    path: `${ReserveUrls.Search}/users`,
    icon: getSvgIcon('user','1.5rem'),
    disabled: false,
    filters: [SearchFilter.Favorites]
}
]

export const adminLinks: Route[] = [{
    title: '标签管理',
    path: `${ReserveUrls.Admin}/tags`,
    icon: getSvgIcon("tags"),
    disabled: false
}]


export const settingLinks: Route[] = [{
    title: '用户设置',
    path: `${ReserveUrls.Settings}/profile`,
    icon: <FaUserCircle />,
    disabled: false
}]


export const navLinks = [{
    title: '主页',
    url: '/',
    baseUrl: '/',
    icon: getSvgIcon("home", "1.4rem")
},
{
    title: '标签',
    url: ReserveUrls.Tags,
    baseUrl: ReserveUrls.Tags,
    icon: getSvgIcon("tags", "1.2rem")
},
{
    title: 'Search',
    url: `${ReserveUrls.Search}/posts`,
    baseUrl: `${ReserveUrls.Search}`,
    icon: getSvgIcon("search", "1.2rem")
},
]