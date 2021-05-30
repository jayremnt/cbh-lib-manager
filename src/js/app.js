// Import F7 Styles
import Framework7 from "./framework7-custom";
import '../css/framework7-custom.less';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.less';
import '../assets/vendor/pace/pace.css';
import '../assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.min.css';
import '../assets/vendor/jquery-scrollbar/jquery.scrollbar.css';
import '../assets/vendor/select2/css/select2.min.css';
import '../assets/vendor/jquery-ui/jquery-ui.min.css';
import '../assets/css/atmos.css';
import '../assets/vendor/dropzone/dropzone.css';
import "../assets/vendor/DataTables/datatables.min.css";
import "../assets/vendor/DataTables/DataTables-1.10.18/css/dataTables.bootstrap4.min.css";
import "../assets/vendor/timepicker/bootstrap-timepicker.min.css";
import "../assets/vendor/daterangepicker/daterangepicker.css";
import "../assets/fonts/jost/jost.css";
import "../assets/fonts/materialdesignicons/materialdesignicons.min.css";
import "../assets/vendor/summernote/summernote-bs4.css";
import "../assets/vendor/datedropper/datedropper.min.css";

// Import Routes
import routes from './routes.js';
// Import Store
import store from './store.js';

// Import main app component
import App from '../app.f7.html';
import Mext from "./mext";

Mext.app = new Framework7({
  name: 'MonokaiToolkit Extension', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element
  component: App, // App main component

  // App store
  store: store,
  // App routes
  routes: routes,
  touch: {
    mdTouchRipple: false
  }
});


Mext.startup().then(() => {
  let mainView = Mext.app.views.create("#view-main", {
    url: "/"
  });
  Mext.app.views.create("#view-aside", {
    url: "/aside/"
  });
  if (!Mext.isLoggedIn) {
    Mext.createPopup("/login/");
  }
});
