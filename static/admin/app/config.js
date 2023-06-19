import backend from './config/backend.js';
import load_config_file from './config/load_config_file.js';
import local_backend from './config/local_backend.js';
import logo_url from './config/logo_url.js';
import media_library from './config/media_library.js';
import media_folder from './config/media_folder.js';
import public_folder from './config/public_folder.js';
import display_url from './config/display_url.js';
import locale from './config/locale.js';
import i18n from './config/i18n.js';
import slug from './config/slug.js';

import { mediaLibrary } from './settings/media-library.js';

export let config = {
    backend,
    load_config_file,
    local_backend,
    display_url,
    logo_url,

    // Internationalisation
    locale,
    i18n,

    // files
    media_folder,
    public_folder,

    // content
    slug
}

// If media library
if (mediaLibrary) {
    config.media_library = media_library;
}

export default config
