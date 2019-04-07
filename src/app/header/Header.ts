import { ContentType } from 'app/model/ContentType';

export class Header {

    primaryLink: ContentType[] = [];
    loginSubmenu: ContentType[] = [];

    constructor(headerContentType) {
        const self = this;
            headerContentType.primary_link.map(function (item) {
                self.primaryLink.push({ 'title': item });
            });
            headerContentType.login_submenu.map(function (item) {
                self.loginSubmenu.push({ 'title': item });
            });
        }
    }

