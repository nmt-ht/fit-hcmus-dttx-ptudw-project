let express = require("express");
let app = express();
let expressHbs = require("express-handlebars");

// Set public static folder
app.use(express.static(__dirname + "/public"));

// Data view engine
let helper = require("./controllers/helper");
let paginateHelper = require("express-handlebars-paginate");

app.engine(
  "hbs",
  expressHbs.engine({
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    extname: "hbs",
    defaultLayout: "layout",
    helpers: {
      createStarList: helper.createStarList,
      createStars: helper.createStars,
      createPagination: paginateHelper.createPagination,
    },
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
    },
  })
);
app.set("view engine", "hbs");

// Use Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use Cookie-parser
let cookieParser = require("cookie-parser");
app.use(cookieParser());

// Use Session
let session = require("express-session");
app.use(
  session({
    cookie: { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 },
    secret: "S3cret",
    resave: false,
    saveUninitialized: false,
  })
);

// Use Cart controller
let Cart = require("./controllers/cartController");
app.use((req, res, next) => {
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  req.session.cart = cart;
  res.locals.totalQuantity = cart.totalQuantity;
  next();
});

// Define your route here
// index.js > routers/..Router.js => controllers/..Controller.js

app.use("/", require("./routes/indexRouter"));
app.use("/products", require("./routes/productRouter"));
app.use("/cart", require('./routes/cartRouter'));
app.use("/comments", require('./routes/commentRouter'));

app.get("/sync", (req, res) => {
  let models = require("./models");
  models.sequelize.sync().then(() => {
    res.send("Database sync completed.");
  });
});

app.get("/:page", (req, res) => {
  let banners = {
    blog: "Our Blog",
    category: "Shop Category",
    cart: "Shopping Cart",
    checkout: "Checkout",
    contact: "Contact Us",
    login: "Login/Register",
    register: "Register",
    "single-blog": "Blog Details",
    "single-product": "Shop Single",
    "tracking-order": "Order Tracking",
    confirmation: "Order Confirmation",
  };
  let page = req.params.page;
  res.render(page, { banner: banners[page] });
});

// Set server port and start server
app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"), () => {
  console.log(`Server is running on port ${app.get("port")}`);
});
