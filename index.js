let express = require('express');
let app = express();
let expressHbs =  require('express-handlebars');

// Set public static folder
app.use(express.static(__dirname + '/public'));

// Data view engine
app.engine('hbs', expressHbs.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + "/views/partials",
    extname: 'hbs',
    defaultLayout: 'layout',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    }
}));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Define your route here
// index.js > routers/..Router.js => controllers/..Controller.js

app.use('/', require('./routes/indexRouter'));
app.use('/products', require('./routes/productRouter'));

app.get('/sync', (req, res) => {
    let models = require('./models');
    models.sequelize.sync().then(() => {
        res.send('Database sync completed.');
    });
});

app.get('/:page', (req, res) => {
    let banners = {
        blog: 'Our Blog',
        category: 'Shop Category',
        cart: 'Shopping Cart',
        checkout: 'Checkout',
        contact: 'Contact Us',
        login: "Login/Register",
        register: 'Register',
        'single-blog': 'Blog Details',
        'single-product': 'Shop Single',
        'tracking-order': 'Order Tracking',
        confirmation: 'Order Confirmation'
    };
    let page = req.params.page;
    res.render(page, {banner: banners[page]});
})

// Set server port and start server
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
});
