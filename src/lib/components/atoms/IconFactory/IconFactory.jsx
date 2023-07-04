import React from "react";

export const Icons = {
    PLUS: 'plus',
    DOWNLOAD: 'download',
    MAGNIFY: 'magnify',
    CHEVRON: 'chevron',
    CHEVRON_DOWN: 'chevron_down',
    CHEVRON_UP: 'chevron_up',
    CHEVRON_LEFT: 'chevron_left',
    CHEVRON_RIGHT: 'chevron_right',
    CROSS: 'cross',
    DELETE: 'delete',
    EDIT: 'edit',
    CHECK: 'check',
    ERROR: 'error',
    EYE: 'eye',
    PIN: 'pin',
    COPY: 'copy',

    ARROW_UP: 'arrow_up',
    ARROW_LEFT: 'arrow_left',
    ARROW_DOWN: 'arrow_down',
    ARROW_RIGHT: 'arrow_right',
    CATALOGUES: 'catalogues',
    CALENDAR: 'calendar',
    CLOCK: 'clock',
    BOX_UP: 'box_up',
    TWO_PEOPLE: 'two_people',
    DOCTOR: 'doctor',
    PRINT: 'print',
    SUCCESS: 'SUCCESS',
    ALERT: 'alert',
    VLK: 'vlk',
    OPEN: 'open',
    RELOAD: 'reload'
};

const getChevron = (color = 'red', className) => {
    return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}>
        <path
            d="M4.2625 5.8335L10 11.504L15.7375 5.8335L17.5 7.58776L10 15.0002L2.5 7.58776L4.2625 5.8335Z"
            fill={color}/>
    </svg>;
}

const getCross = (color = 'red') => {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
        <g clipPath={'url(#clip0_3293_10237)'}>
            <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill={color}/>
        </g>
        <defs>
            <clipPath id="clip0_3293_10237">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>;
}

const getDelete = (color = 'red') => {
    const id = 'mask_' + Math.random();
    const maskUrl = 'url(#' + id + ')';
    return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id={id}
              style={{maskType: 'alpha'}}
              maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
            <path d="M7.4987 2.5V3.33333H3.33203V5H4.16536V15.8333C4.16536 16.2754 4.34096 16.6993 4.65352 17.0118C4.96608 17.3244 5.39 17.5 5.83203 17.5H14.1654C14.6074 17.5 15.0313 17.3244 15.3439 17.0118C15.6564 16.6993 15.832 16.2754 15.832 15.8333V5H16.6654V3.33333H12.4987V2.5H7.4987ZM7.4987 6.66667H9.16536V14.1667H7.4987V6.66667ZM10.832 6.66667H12.4987V14.1667H10.832V6.66667Z" fill="black"/>
        </mask>
        <g mask={maskUrl}>
            <rect width="20" height="20" fill={color}/>
        </g>
    </svg>;
}

const getEdit = (color = 'red') => {
    const id = 'mask_' + Math.random();
    const maskUrl = 'url(#' + id + ')';
    return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id={id}
              style={{maskType: 'alpha'}}
              maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
            <path d="M17.2583 5.8668C17.5833 5.5418 17.5833 5.00013 17.2583 4.6918L15.3083 2.7418C15 2.4168 14.4583 2.4168 14.1333 2.7418L12.6 4.2668L15.725 7.3918M2.5 14.3751V17.5001H5.625L14.8417 8.27513L11.7167 5.15013L2.5 14.3751Z" fill="black"/>
        </mask>
        <g mask={maskUrl}>
            <rect width="20" height="20" fill={color}/>
        </g>
    </svg>;
}

const getCheck = (color = 'red', className) => {
    const id = 'mask_' + Math.random();
    const maskUrl = 'url(#' + id + ')';
    return <svg
        className={className}
        width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id={id}
              style={{maskType: 'alpha'}}
              maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
            <path d="M7.49995 17.0167L2.32495 11.8417L4.68328 9.48332L7.49995 12.3083L15.7333 4.06665L18.0916 6.42498L7.49995 17.0167Z" fill="black"/>
        </mask>
        <g mask={maskUrl}>
            <rect width="20" height="20" fill={color}/>
        </g>
    </svg>;
}

const getPlus = (color = 'red') => {
    return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_1020_4428"
              style={{maskType: 'alpha'}}
              maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
            <g clipPath={'url(#clip0_1020_4428)'}>
                <path d="M10.0013 1.6665C5.4013 1.6665 1.66797 5.39984 1.66797 9.99984C1.66797 14.5998 5.4013 18.3332 10.0013 18.3332C14.6013 18.3332 18.3346 14.5998 18.3346 9.99984C18.3346 5.39984 14.6013 1.6665 10.0013 1.6665ZM14.168 10.8332H10.8346V14.1665H9.16797V10.8332H5.83464V9.1665H9.16797V5.83317H10.8346V9.1665H14.168V10.8332Z" fill="#2C72DB"/>
            </g>
        </mask>
        <g mask="url(#mask0_1020_4428)">
            <rect width="20" height="20" fill={color}/>
        </g>
        <defs>
            <clipPath id="clip0_1020_4428">
                <rect width="20" height="20" fill="white"/>
            </clipPath>
        </defs>
    </svg>;
}

const getDownload = (color = 'red', className) => {
    return <svg
        className={className}
        width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_2277_11333"
              style={{maskType: 'alpha'}}
              maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
            <path d="M4.1665 16.6667H15.8332V15H4.1665M15.8332 7.5H12.4998V2.5H7.49984V7.5H4.1665L9.99984 13.3333L15.8332 7.5Z" fill="black"/>
        </mask>
        <g mask="url(#mask0_2277_11333)">
            <rect width="20" height="20" fill={color}/>
        </g>
    </svg>;
}

const getArrowUp = (color = 'red', className) => {
    return <svg
        className={className}
        width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.8332 16.6668H9.16657V6.6668L4.58324 11.2501L3.3999 10.0668L9.9999 3.4668L16.5999 10.0668L15.4166 11.2501L10.8332 6.6668V16.6668Z" fill={color}/>
    </svg>;
}

const getError = (color = 'black', className) => {
    const id = 'clip_' + Math.random();
    const clipUrl = 'url(#' + id + ')';
    return <svg
        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <g clipPath={clipUrl}>
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H7V11H17V13Z" fill={color}/>
        </g>
        <defs>
            <clipPath id={id}>
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>;
}

const getCalendarIcon = (color, className) => {
    const id = 'mask_' + Math.random();
    const maskUrl = 'url(#' + id + ')';
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                className={className}
                xmlns="http://www.w3.org/2000/svg">
        <mask id={id}
              style={{maskType: 'alpha'}}
              maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <path
                d="M9 10V12H7V10H9ZM13 10V12H11V10H13ZM17 10V12H15V10H17ZM19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C3.89 21 3 20.1 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H6V1H8V3H16V1H18V3H19ZM19 19V8H5V19H19ZM9 14V16H7V14H9ZM13 14V16H11V14H13ZM17 14V16H15V14H17Z"
                fill="black"/>
        </mask>
        <g mask={maskUrl}>
            <rect width="24" height="24" fill={color}/>
        </g>
    </svg>;
};

const getMagnifyIcon = (color, className) => {
    return <svg
        className={className}
        width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.91667 2.5C9.35326 2.5 10.731 3.07068 11.7468 4.0865C12.7627 5.10233 13.3333 6.48008 13.3333 7.91667C13.3333 9.25833 12.8417 10.4917 12.0333 11.4417L12.2583 11.6667H12.9167L17.0833 15.8333L15.8333 17.0833L11.6667 12.9167V12.2583L11.4417 12.0333C10.4917 12.8417 9.25833 13.3333 7.91667 13.3333C6.48008 13.3333 5.10233 12.7627 4.0865 11.7468C3.07068 10.731 2.5 9.35326 2.5 7.91667C2.5 6.48008 3.07068 5.10233 4.0865 4.0865C5.10233 3.07068 6.48008 2.5 7.91667 2.5ZM7.91667 4.16667C5.83333 4.16667 4.16667 5.83333 4.16667 7.91667C4.16667 10 5.83333 11.6667 7.91667 11.6667C10 11.6667 11.6667 10 11.6667 7.91667C11.6667 5.83333 10 4.16667 7.91667 4.16667Z" fill={color}/>
    </svg>;
};

const getEyeIcon = (color, className) => {
    return <svg
        className={className}
        width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99992 7.5C9.33688 7.5 8.70099 7.76339 8.23215 8.23223C7.76331 8.70107 7.49992 9.33696 7.49992 10C7.49992 10.663 7.76331 11.2989 8.23215 11.7678C8.70099 12.2366 9.33688 12.5 9.99992 12.5C10.663 12.5 11.2988 12.2366 11.7677 11.7678C12.2365 11.2989 12.4999 10.663 12.4999 10C12.4999 9.33696 12.2365 8.70107 11.7677 8.23223C11.2988 7.76339 10.663 7.5 9.99992 7.5ZM9.99992 14.1667C8.89485 14.1667 7.83504 13.7277 7.05364 12.9463C6.27224 12.1649 5.83325 11.1051 5.83325 10C5.83325 8.89493 6.27224 7.83512 7.05364 7.05372C7.83504 6.27232 8.89485 5.83333 9.99992 5.83333C11.105 5.83333 12.1648 6.27232 12.9462 7.05372C13.7276 7.83512 14.1666 8.89493 14.1666 10C14.1666 11.1051 13.7276 12.1649 12.9462 12.9463C12.1648 13.7277 11.105 14.1667 9.99992 14.1667ZM9.99992 3.75C5.83325 3.75 2.27492 6.34167 0.833252 10C2.27492 13.6583 5.83325 16.25 9.99992 16.25C14.1666 16.25 17.7249 13.6583 19.1666 10C17.7249 6.34167 14.1666 3.75 9.99992 3.75Z" fill={color}/>
    </svg>;
};

const getPinIcon = (color, className) => {
    return <svg
        className={className}
        width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0001 9.58268C9.44755 9.58268 8.91764 9.36319 8.52694 8.97249C8.13624 8.58179 7.91675 8.05188 7.91675 7.49935C7.91675 6.94681 8.13624 6.41691 8.52694 6.02621C8.91764 5.63551 9.44755 5.41602 10.0001 5.41602C10.5526 5.41602 11.0825 5.63551 11.4732 6.02621C11.8639 6.41691 12.0834 6.94681 12.0834 7.49935C12.0834 7.77294 12.0295 8.04385 11.9248 8.29661C11.8201 8.54937 11.6667 8.77903 11.4732 8.97249C11.2798 9.16594 11.0501 9.3194 10.7973 9.4241C10.5446 9.5288 10.2737 9.58268 10.0001 9.58268ZM10.0001 1.66602C8.45299 1.66602 6.96925 2.2806 5.87529 3.37456C4.78133 4.46852 4.16675 5.95225 4.16675 7.49935C4.16675 11.8743 10.0001 18.3327 10.0001 18.3327C10.0001 18.3327 15.8334 11.8743 15.8334 7.49935C15.8334 5.95225 15.2188 4.46852 14.1249 3.37456C13.0309 2.2806 11.5472 1.66602 10.0001 1.66602Z" fill={color}/>
    </svg>;
};

const getCataloguesIcon = (color, className) => {
    const id = 'mask_' + Math.random();
    const maskUrl = 'url(#' + id + ')';
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
    >
        <mask id={id}
              style={{maskType: 'alpha'}}
              maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <path
                d="M21 5C19.89 4.65 18.67 4.5 17.5 4.5C15.55 4.5 13.45 4.9 12 6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5ZM21 18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V8C13.35 7.15 15.8 6.5 17.5 6.5C18.7 6.5 19.9 6.65 21 7V18.5Z"
                fill="#565656"/>
        </mask>
        <g mask={maskUrl}>
            <rect width="24" height="24" fill={color}/>
        </g>
    </svg>;
};

const getClockIcon = (color, className) => {
    const id = 'mask_' + Math.random();
    const maskUrl = 'url(#' + id + ')';
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
    >
        <mask id={id}
              style={{maskType: 'alpha'}}
              maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <path d="M12 20C16.4 20 20 16.4 20 12C20 7.6 16.4 4 12 4C7.6 4 4 7.6 4 12C4 16.4 7.6 20 12 20ZM12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2ZM12.5 12.8L7.7 15.6L7 14.2L11 11.9V7H12.5V12.8Z" fill="#565656"/>
        </mask>
        <g mask={maskUrl}>
            <rect width="24" height="24" fill={color}/>
        </g>
    </svg>;
};

const getBoxUpIcon = (color, className) => {
    const id = 'mask_' + Math.random();
    const maskUrl = 'url(#' + id + ')';
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
    >
        <mask id={id}
              style={{maskType: 'alpha'}}
              maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <path d="M4 21H20V8H4M14 15V18H10V15H7L12 10L17 15M3 3H21V7H3" fill="#565656"/>
        </mask>
        <g mask={maskUrl}>
            <rect width="24" height="24" fill={color}/>
        </g>
    </svg>;
};

const getTwoPeopleIcon = (color, className) => {
    const id = 'mask_' + Math.random();
    const maskUrl = 'url(#' + id + ')';
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
    >
        <mask id={id}
              style={{maskType: 'alpha'}}
              maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <path d="M16 17.0001V19.0001H2V17.0001C2 17.0001 2 13.0001 9 13.0001C16 13.0001 16 17.0001 16 17.0001ZM12.5 7.50005C12.5 6.80782 12.2947 6.13113 11.9101 5.55556C11.5256 4.97998 10.9789 4.53138 10.3394 4.26647C9.69985 4.00157 8.99612 3.93226 8.31718 4.0673C7.63825 4.20235 7.01461 4.5357 6.52513 5.02518C6.03564 5.51466 5.7023 6.1383 5.56725 6.81724C5.4322 7.49617 5.50152 8.1999 5.76642 8.83944C6.03133 9.47899 6.47993 10.0256 7.0555 10.4102C7.63108 10.7948 8.30777 11.0001 9 11.0001C9.92826 11.0001 10.8185 10.6313 11.4749 9.97493C12.1313 9.31855 12.5 8.42831 12.5 7.50005ZM15.94 13.0001C16.5547 13.4758 17.0578 14.0805 17.4137 14.7716C17.7696 15.4626 17.9697 16.2233 18 17.0001V19.0001H22V17.0001C22 17.0001 22 13.3701 15.94 13.0001ZM15 4.00005C14.3117 3.99622 13.6385 4.20201 13.07 4.59005C13.6774 5.43879 14.0041 6.45634 14.0041 7.50005C14.0041 8.54377 13.6774 9.56132 13.07 10.4101C13.6385 10.7981 14.3117 11.0039 15 11.0001C15.9283 11.0001 16.8185 10.6313 17.4749 9.97493C18.1313 9.31855 18.5 8.42831 18.5 7.50005C18.5 6.57179 18.1313 5.68156 17.4749 5.02518C16.8185 4.3688 15.9283 4.00005 15 4.00005Z" fill="#565656"/>
        </mask>
        <g mask={maskUrl}>
            <rect width="24" height="24" fill={color}/>
        </g>
    </svg>;
};

const getDoctorIcon = (color, className) => {
    const id = 'mask_' + Math.random();
    const maskUrl = 'url(#' + id + ')';
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
    >
        <mask id={id}
              style={{maskType: 'alpha'}}
              maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <path d="M14.84 16.26C17.86 16.83 20 18.29 20 20V22H4V20C4 18.29 6.14 16.83 9.16 16.26L12 21L14.84 16.26ZM8 8H16V10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10V8ZM8 7L8.41 2.9C8.46 2.39 8.89 2 9.41 2H14.6C15.11 2 15.54 2.39 15.59 2.9L16 7H8ZM12 3H11V4H10V5H11V6H12V5H13V4H12V3Z" fill="#565656"/>
        </mask>
        <g mask={maskUrl}>
            <rect width="24" height="24" fill={color}/>
        </g>
    </svg>;
};

const getPrintIcon = (color, className) => {
    return <svg
        className={className}
        width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.9997 8.33301H4.99967C4.55765 8.33301 4.13372 8.5086 3.82116 8.82116C3.5086 9.13372 3.33301 9.55765 3.33301 9.99967V15.833H16.6663V9.99967C16.6663 9.55765 16.4907 9.13372 16.1782 8.82116C15.8656 8.5086 15.4417 8.33301 14.9997 8.33301ZM14.9997 11.6663H11.6663V9.99967H14.9997M14.1663 7.49967H5.83301V3.33301H14.1663V7.49967Z" fill={color}/>
    </svg>;
};

const getCopyIcon = (color, className) => {
    return <svg
        className={className}
        width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 15.8127V1.646H16.6667V15.8127H5ZM6.25 14.5627H15.4167V2.896H6.25V14.5627ZM2.5 18.3127V4.50016H3.75V17.0627H13.625V18.3127H2.5ZM6.25 14.5627V2.896V14.5627Z" fill={color}/>
    </svg>;
};

const getSuccessIcon = (color = '#0B8831', className) => {
    return <svg
        className={className}
        width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 17L5 12L6.41 10.58L10 14.17L17.59 6.58L19 8M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" fill={color}/>
    </svg>;
};

const getAlertIcon = (color = '#E0091F', className) => {
    return <svg
        className={className}
        width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.83366 9.83333H8.16699V4.83333H9.83366M9.83366 13.1667H8.16699V11.5H9.83366M9.00033 0.666664C7.90598 0.666664 6.82234 0.882212 5.8113 1.301C4.80025 1.71979 3.88159 2.33362 3.10777 3.10744C1.54497 4.67024 0.666992 6.78986 0.666992 9C0.666992 11.2101 1.54497 13.3298 3.10777 14.8926C3.88159 15.6664 4.80025 16.2802 5.8113 16.699C6.82234 17.1178 7.90598 17.3333 9.00033 17.3333C11.2105 17.3333 13.3301 16.4554 14.8929 14.8926C16.4557 13.3298 17.3337 11.2101 17.3337 9C17.3337 7.90565 17.1181 6.82202 16.6993 5.81097C16.2805 4.79992 15.6667 3.88126 14.8929 3.10744C14.1191 2.33362 13.2004 1.71979 12.1894 1.301C11.1783 0.882212 10.0947 0.666664 9.00033 0.666664Z" fill={color}/>
    </svg>;
};

const getVlkIcon = (color, className) => {
    const id = 'mask_' + Math.random();
    const maskUrl = 'url(#' + id + ')';
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
    >
        <mask id={id}
              style={{maskType: 'alpha'}}
              maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <path d="M10.5 13H8V10H10.5V7.5H13.5V10H16V13H13.5V15.5H10.5V13ZM12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2Z" fill={color}/>
        </mask>
        <g mask={maskUrl}>
            <rect width="24" height="24" fill={color}/>
        </g>
    </svg>;
};

const getOpenIcon = (color, className) => {
    const id = 'mask_' + Math.random();
    const maskUrl = 'url(#' + id + ')';

    return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}>
        <mask id={id}
              style={{maskType: 'alpha'}}
              maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
            <path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H2.5V17.5H17.5V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z" fill={color}/>
        </mask>
        <g mask={maskUrl}>
            <rect width="20" height="20" fill="#2C72DB"/>
        </g>
    </svg>;
};

const getReloadIcon = (color, className) => {
    const id = 'mask_' + Math.random();
    const maskUrl = 'url(#' + id + ')';

    return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}>
        <mask id={id}
              style={{maskType: 'alpha'}}
              maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
            <path d="M10.0002 5.00001V7.50001L13.3335 4.16668L10.0002 0.833344V3.33334C8.23205 3.33334 6.53636 4.03572 5.28612 5.28596C4.03588 6.53621 3.3335 8.2319 3.3335 10C3.3335 11.3083 3.71683 12.525 4.36683 13.55L5.5835 12.3333C5.2085 11.6417 5.00016 10.8333 5.00016 10C5.00016 8.67393 5.52695 7.40216 6.46463 6.46448C7.40231 5.52679 8.67408 5.00001 10.0002 5.00001ZM15.6335 6.45001L14.4168 7.66668C14.7835 8.36668 15.0002 9.16668 15.0002 10C15.0002 11.3261 14.4734 12.5979 13.5357 13.5355C12.598 14.4732 11.3262 15 10.0002 15V12.5L6.66683 15.8333L10.0002 19.1667V16.6667C11.7683 16.6667 13.464 15.9643 14.7142 14.7141C15.9645 13.4638 16.6668 11.7681 16.6668 10C16.6668 8.69168 16.2835 7.47501 15.6335 6.45001Z" fill="black"/>
        </mask>
        <g mask={maskUrl}>
            <rect width="20" height="20" fill="#2C72DB"/>
        </g>
    </svg>
};

export class IconFactory {

    static getIcon(icon, color = 'magenta', className) {
        switch (icon) {
            case Icons.PLUS:
                return getPlus(color);
            case Icons.ARROW_UP:
                return getArrowUp(color);
            case Icons.ARROW_LEFT:
                return getArrowUp(color, className + ' rotate270');
            case Icons.ARROW_DOWN:
                return getArrowUp(color, className + ' rotate180');
            case Icons.ARROW_RIGHT:
                return getArrowUp(color, className + ' rotate90');
            case Icons.DOWNLOAD:
                return getDownload(color, className);
            case Icons.DELETE:
                return getDelete(color);
            case Icons.EDIT:
                return getEdit(color);
            case Icons.CHECK:
                return getCheck(color, className);
            case Icons.CHEVRON:
            case Icons.CHEVRON_DOWN:
                return getChevron(color, className);
            case Icons.CHEVRON_UP:
                return getChevron(color, className + ' rotate180');
            case Icons.CHEVRON_LEFT:
                return getChevron(color, className + ' rotate90');
            case Icons.CHEVRON_RIGHT:
                return getChevron(color, className + ' rotate270');
            case Icons.CROSS:
                return getCross(color);
            case Icons.ERROR:
                return getError(color, className);
            case Icons.MAGNIFY:
                return getMagnifyIcon(color, className);
            case Icons.EYE:
                return getEyeIcon(color, className);
            case Icons.PIN:
                return getPinIcon(color, className);
            case Icons.CATALOGUES:
                return getCataloguesIcon(color, className);
            case Icons.CALENDAR:
                return getCalendarIcon(color, className);
            case Icons.CLOCK:
                return getClockIcon(color, className);
            case Icons.BOX_UP:
                return getBoxUpIcon(color, className);
            case Icons.TWO_PEOPLE:
                return getTwoPeopleIcon(color, className);
            case Icons.DOCTOR:
                return getDoctorIcon(color, className);
            case Icons.PRINT:
                return getPrintIcon(color, className);
            case Icons.COPY:
                return getCopyIcon(color, className);
            case Icons.SUCCESS:
                return getSuccessIcon(color, className);
            case Icons.ALERT:
                return getAlertIcon(color, className);
            case Icons.VLK:
                return getVlkIcon(color, className);
            case Icons.OPEN:
                return getOpenIcon(color, className);
            case Icons.RELOAD:
                return getReloadIcon(color, className);
        }
    }
}
