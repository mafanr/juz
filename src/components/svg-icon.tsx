export function getSvgIcon(name,height="1.4rem") {
    let svg
    switch (name) {
        case "home":
            svg = <svg fill="currentColor" height={height} viewBox="0 0 576 512"><path d="M541 229.16l-232.85-190a32.16 32.16 0 00-40.38 0L35 229.16a8 8 0 00-1.16 11.24l10.1 12.41a8 8 0 0011.2 1.19L96 220.62v243a16 16 0 0016 16h128a16 16 0 0016-16v-128l64 .3V464a16 16 0 0016 16l128-.33a16 16 0 0016-16V220.62L520.86 254a8 8 0 0011.25-1.16l10.1-12.41a8 8 0 00-1.21-11.27zm-93.11 218.59h.1l-96 .3V319.88a16.05 16.05 0 00-15.95-16l-96-.27a16 16 0 00-16.05 16v128.14H128V194.51L288 63.94l160 130.57z"></path></svg>
            break
        case "tags":
            svg = <svg fill="currentColor" height={height}  viewBox="0 0 640 512"><path d="M625.941 293.823L421.823 497.941c-18.746 18.746-49.138 18.745-67.882 0l-1.775-1.775 22.627-22.627 1.775 1.775c6.253 6.253 16.384 6.243 22.627 0l204.118-204.118c6.238-6.239 6.238-16.389 0-22.627L391.431 36.686A15.895 15.895 0 00380.117 32h-19.549l-32-32h51.549a48 48 0 0133.941 14.059L625.94 225.941c18.746 18.745 18.746 49.137.001 67.882zM252.118 32H48c-8.822 0-16 7.178-16 16v204.118c0 4.274 1.664 8.292 4.686 11.314l211.882 211.882c6.253 6.253 16.384 6.243 22.627 0l204.118-204.118c6.238-6.239 6.238-16.389 0-22.627L263.431 36.686A15.895 15.895 0 00252.118 32m0-32a48 48 0 0133.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.746 18.746-49.138 18.745-67.882 0L14.059 286.059A48 48 0 010 252.118V48C0 21.49 21.49 0 48 0h204.118zM144 124c-11.028 0-20 8.972-20 20s8.972 20 20 20 20-8.972 20-20-8.972-20-20-20m0-28c26.51 0 48 21.49 48 48s-21.49 48-48 48-48-21.49-48-48 21.49-48 48-48z"></path></svg>
            break
        case "post":
            svg = <svg fill="currentColor" height={height} viewBox="0 0 384 512"><path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-48-244v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12z"></path></svg>
            break;
        case "series":
            svg = <svg fill="currentColor" height={height} viewBox="0 0 512 512"><path d="M512 256.01c0-9.98-5.81-18.94-14.77-22.81l-99.74-43.27 99.7-43.26c9-3.89 14.81-12.84 14.81-22.81s-5.81-18.92-14.77-22.79L271.94 3.33c-10.1-4.44-21.71-4.45-31.87-.02L14.81 101.06C5.81 104.95 0 113.9 0 123.87s5.81 18.92 14.77 22.79l99.73 43.28-99.7 43.26C5.81 237.08 0 246.03 0 256.01c0 9.97 5.81 18.92 14.77 22.79l99.72 43.26-99.69 43.25C5.81 369.21 0 378.16 0 388.14c0 9.97 5.81 18.92 14.77 22.79l225.32 97.76a40.066 40.066 0 0015.9 3.31c5.42 0 10.84-1.1 15.9-3.31l225.29-97.74c9-3.89 14.81-12.84 14.81-22.81 0-9.98-5.81-18.94-14.77-22.81l-99.72-43.26 99.69-43.25c9-3.89 14.81-12.84 14.81-22.81zM45.23 123.87l208.03-90.26.03-.02c1.74-.71 3.65-.76 5.45.02l208.03 90.26-208.03 90.27c-1.81.77-3.74.77-5.48 0L45.23 123.87zm421.54 264.27L258.74 478.4c-1.81.77-3.74.77-5.48 0L45.23 388.13l110.76-48.06 84.11 36.49a40.066 40.066 0 0015.9 3.31c5.42 0 10.84-1.1 15.9-3.31l84.11-36.49 110.76 48.07zm-208.03-41.87c-1.81.77-3.74.77-5.48 0L45.23 256 156 207.94l84.1 36.5a40.066 40.066 0 0015.9 3.31c5.42 0 10.84-1.1 15.9-3.31l84.1-36.49 110.77 48.07-208.03 90.25z"></path></svg>
            break
        case "explore":
            svg = <svg fill="currentColor" height={height}  viewBox="0 0 496 512"><path d="M264.97 272.97c9.38-9.37 9.38-24.57 0-33.94-9.37-9.37-24.57-9.37-33.94 0-9.38 9.37-9.38 24.57 0 33.94 9.37 9.37 24.57 9.37 33.94 0zM351.44 125c-2.26 0-4.51.37-6.71 1.16l-154.9 55.85c-7.49 2.7-13.1 8.31-15.8 15.8l-55.85 154.91c-5.65 15.67 10.33 34.27 26.4 34.27 2.26 0 4.51-.37 6.71-1.16l154.9-55.85c7.49-2.7 13.1-8.31 15.8-15.8l55.85-154.9c5.64-15.67-10.33-34.28-26.4-34.28zm-58.65 175.79l-140.1 50.51 50.51-140.11 140.11-50.51-50.52 140.11zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 464c-119.1 0-216-96.9-216-216S128.9 40 248 40s216 96.9 216 216-96.9 216-216 216z"></path></svg>
            break
        default:
            break; 
    }

    return svg
}