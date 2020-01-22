import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faLink, faPowerOff, faUser, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

function initFontAwesome() {
  library.add(fab);
  library.add(faLink);
  library.add(faUser);
  library.add(faPowerOff);
  library.add(faArrowUp);
  library.add(faArrowDown);
}

export default initFontAwesome;
