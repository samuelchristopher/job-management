var angular               = require('angular');
var angularRoute          = require('angular-route');
var angularAnimate        = require('angular-animate');
var angularMaterial       = require('angular-material');
var angularAria           = require('angular-aria');
var angularMessages       = require('angular-messages')
var firebase              = require('./src/firebase');
var angularfire           = require('angularfire');
var app                   = require('./app');
var NavigationController  = require('./controllers/NavigationController');
var HomeController        = require('./controllers/HomeController');
var LoginController       = require('./controllers/LoginController');
var ToolbarController     = require('./controllers/ToolbarController');
var RegisterController    = require('./controllers/RegisterController');
var ProfileController     = require('./controllers/ProfileController');
var SalesController       = require('./controllers/SalesController');
var NewJobController      = require('./controllers/NewJobController');
var viewJobController     = require('./controllers/viewJobController');
var JobController         = require('./controllers/JobController');
var TechController        = require('./controllers/TechController');
var LabelController       = require('./controllers/print/LabelController');
var CustomerController    = require('./controllers/print/CustomerController');
var PrintController       = require('./controllers/print/PrintController');
var AllController         = require('./controllers/summary/AllController');
var TechSummaryController = require('./controllers/summary/TechSummaryController');
var config                = require('./config');
var flash                 = require('./services/flash');
var auth                  = require('./services/auth');
var filters               = require('./services/filters');
var jobs                  = require('./services/jobs');
var compare               = require('./directives/compare');
var inverseCompare        = require('./directives/inverseCompare');
var angularPrint          = require('./src/angularPrint');
