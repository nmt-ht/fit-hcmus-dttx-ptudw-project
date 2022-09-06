'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
                message: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
                userId: 1,
                productId: 9,
                parentCommentId: null
            },
            {
                message: 'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellussemper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
                userId: 2,
                productId: 28,
                parentCommentId: null
            },
            {
                message: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
                userId: 3,
                productId: 21,
                parentCommentId: null
            },
            {
                message: 'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
                userId: 4,
                productId: 20,
                parentCommentId: null
            },
            {
                message: 'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
                userId: 5,
                productId: 30,
                parentCommentId: null
            },
            {
                message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
                userId: 6,
                productId: 9,
                parentCommentId: null
            },
            {
                message: 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
                userId: 7,
                productId: 4,
                parentCommentId: null
            },
            {
                message: 'Aenean sit amet justo.',
                userId: 8,
                productId: 13,
                parentCommentId: null
            },
            {
                message: 'Donec dapibus. Duis at velit eu est congue elementum. In hachabitasse platea dictumst.',
                userId: 9,
                productId: 12,
                parentCommentId: null
            },
            {
                message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
                userId: 10,
                productId: 20,
                parentCommentId: null
            },
            {
                message: 'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
                userId: 1,
                productId: 32,
                parentCommentId: null
            },
            {
                message: 'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsumprimis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
                userId: 2,
                productId: 12,
                parentCommentId: null
            },
            {
                message: 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
                userId: 3,
                productId: 21,
                parentCommentId: null
            },
            {
                message: 'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
                userId: 4,
                productId: 27,
                parentCommentId: null
            },
            {
                message: 'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
                userId: 5,
                productId: 26,
                parentCommentId: null
            },
            {
                message: 'Maecenas ut massa quis augue luctus tincidunt.',
                userId: 6,
                productId: 26,
                parentCommentId: null
            },
            {
                message: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed,nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
                userId: 7,
                productId: 32,
                parentCommentId: null
            },
            {
                message: 'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitaequam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
                userId: 8,
                productId: 22,
                parentCommentId: null
            },
            {
                message: 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
                userId: 9,
                productId: 25,
                parentCommentId: null
            },
            {
                message: 'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
                userId: 10,
                productId: 4,
                parentCommentId: null
            },
            {
                message: 'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
                userId: 1,
                productId: 30,
                parentCommentId: null
            },
            {
                message: 'Aliquam sit amet diam in magna bibendum imperdiet.',
                userId: 2,
                productId: 27,
                parentCommentId: null
            },
            {
                message: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
                userId: 3,
                productId: 31,
                parentCommentId: null
            },
            {
                message: 'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sedaccumsan felis. Ut at dolor quis odio consequat varius. Integer acleo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
                userId: 4,
                productId: 27,
                parentCommentId: null
            },
            {
                message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
                userId: 5,
                productId: 35,
                parentCommentId: null
            },
            {
                message: 'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
                userId: 6,
                productId: 26,
                parentCommentId: null
            },
            {
                message: 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
                userId: 7,
                productId: 23,
                parentCommentId: null
            },
            {
                message: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eumagna vulputate luctus. Cum sociis natoque penatibus et magnis disparturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
                userId: 8,
                productId: 7,
                parentCommentId: null
            },
            {
                message: 'Proin interdum mauris non ligula pellentesque ultrices.',
                userId: 9,
                productId: 33,
                parentCommentId: null
            },
            {
                message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odiojusto, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
                userId: 10,
                productId: 4,
                parentCommentId: null
            },
            {
                message: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
                userId: 1,
                productId: 19,
                parentCommentId: null
            },
            {
                message: 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
                userId: 2,
                productId: 21,
                parentCommentId: null
            },
            {
                message: 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
                userId: 3,
                productId: 29,
                parentCommentId: null
            },
            {
                message: 'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretiumiaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
                userId: 4,
                productId: 21,
                parentCommentId: null
            },
            {
                message: 'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
                userId: 5,
                productId: 20,
                parentCommentId: null
            },
            {
                message: 'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
                userId: 6,
                productId: 26,
                parentCommentId: null
            },
            {
                message: 'Vestibulum quam sapien, varius ut, blandit non, interdum in,ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
                userId: 7,
                productId: 17,
                parentCommentId: null
            },
            {
                message: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed,justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetramagna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
                userId: 8,
                productId: 22,
                parentCommentId: null
            },
            {
                message: 'Pellentesque ultrices mattis odio.',
                userId: 9,
                productId: 19,
                parentCommentId: null
            },
            {
                message: 'Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
                userId: 10,
                productId: 10,
                parentCommentId: null
            },
            {
                message: 'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
                userId: 1,
                productId: 35,
                parentCommentId: null
            },
            {
                message: 'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justoeu massa. Donec dapibus.',
                userId: 2,
                productId: 29,
                parentCommentId: null
            },
            {
                message: 'Nam nulla.',
                userId: 3,
                productId: 34,
                parentCommentId: null
            },
            {
                message: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
                userId: 4,
                productId: 12,
                parentCommentId: null
            },
            {
                message: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nullatempus. Vivamus in felis eu sapien cursus vestibulum.',
                userId: 5,
                productId: 19,
                parentCommentId: null
            },
            {
                message: 'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
                userId: 6,
                productId: 20,
                parentCommentId: null
            },
            {
                message: 'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
                userId: 7,
                productId: 27,
                parentCommentId: null
            },
            {
                message: 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
                userId: 8,
                productId: 1,
                parentCommentId: null
            },
            {
                message: 'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
                userId: 9,
                productId: 22,
                parentCommentId: null
            },
            {
                message: 'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit laciniaerat.',
                userId: 10,
                productId: 26,
                parentCommentId: null
            },
            {
                message: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut,rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sedsagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
                userId: 1,
                productId: 2,
                parentCommentId: null
            },
            {
                message: 'Praesent id massa id nisl venenatis lacinia. Aenean sit ametjusto.',
                userId: 2,
                productId: 11,
                parentCommentId: 88
            },
            {
                message: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
                userId: 3,
                productId: 22,
                parentCommentId: 38
            },
            {
                message: 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
                userId: 4,
                productId: 26,
                parentCommentId: null
            },
            {
                message: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
                userId: 5,
                productId: 35,
                parentCommentId: 41
            },
            {
                message: 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
                userId: 6,
                productId: 14,
                parentCommentId: null
            },
            {
                message: 'Duis mattis egestas metus. Aenean fermentum. Donec ut mauriseget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
                userId: 7,
                productId: 35,
                parentCommentId: 41
            },
            {
                message: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. Inhac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
                userId: 8,
                productId: 35,
                parentCommentId: 41
            },
            {
                message: 'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
                userId: 9,
                productId: 19,
                parentCommentId: 31
            },
            {
                message: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aeneansit amet justo. Morbi ut odio.',
                userId: 10,
                productId: 21,
                parentCommentId: null
            },
            {
                message: 'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsumprimis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatistristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
                userId: 1,
                productId: 32,
                parentCommentId: 11
            },
            {
                message: 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
                userId: 2,
                productId: 3,
                parentCommentId: null
            },
            {
                message: 'Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
                userId: 3,
                productId: 16,
                parentCommentId: null
            },
            {
                message: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
                userId: 4,
                productId: 27,
                parentCommentId: 14
            },
            {
                message: 'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
                userId: 5,
                productId: 25,
                parentCommentId: 19
            },
            {
                message: 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
                userId: 6,
                productId: 24,
                parentCommentId: null
            },
            {
                message: 'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsanodio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
                userId: 7,
                productId: 11,
                parentCommentId: null
            },
            {
                message: 'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
                userId: 8,
                productId: 10,
                parentCommentId: null
            },
            {
                message: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
                userId: 9,
                productId: 6,
                parentCommentId: null
            },
            {
                message: 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
                userId: 10,
                productId: 34,
                parentCommentId: null
            },
            {
                message: 'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsanodio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
                userId: 3,
                productId: 29,
                parentCommentId: null
            },
            {
                message: 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duisat velit eu est congue elementum. In hac habitasse platea dictumst.',
                userId: 2,
                productId: 13,
                parentCommentId: 8
            },
            {
                message: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
                userId: 1,
                productId: 33,
                parentCommentId: null
            },
            {
                message: 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
                userId: 4,
                productId: 32,
                parentCommentId: 17
            },
            {
                message: 'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer nonvelit.',
                userId: 5,
                productId: 11,
                parentCommentId: 67
            },
            {
                message: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
                userId: 6,
                productId: 6,
                parentCommentId: 69
            },
            {
                message: 'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
                userId: 7,
                productId: 10,
                parentCommentId: 68
            },
            {
                message: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quisorci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
                userId: 8,
                productId: 25,
                parentCommentId: null
            },
            {
                message: 'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felissed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
                userId: 10,
                productId: 31,
                parentCommentId: null
            },
            {
                message: 'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
                userId: 9,
                productId: 3,
                parentCommentId: 62
            },
            {
                message: 'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellussemper interdum. Mauris ullamcorper purus sit amet nulla.',
                userId: 2,
                productId: 7,
                parentCommentId: 28
            },
            {
                message: 'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
                userId: 3,
                productId: 32,
                parentCommentId: 17
            },
            {
                message: 'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget,tempus vel, pede. Morbi porttitor lorem id ligula.',
                userId: 1,
                productId: 5,
                parentCommentId: null
            },
            {
                message: 'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
                userId: 10,
                productId: 13,
                parentCommentId: null
            },
            {
                message: 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
                userId: 9,
                productId: 30,
                parentCommentId: 21
            },
            {
                message: 'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauriseget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
                userId: 8,
                productId: 17,
                parentCommentId: null
            },
            {
                message: 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
                userId: 7,
                productId: 10,
                parentCommentId: 68
            },
            {
                message: 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
                userId: 6,
                productId: 11,
                parentCommentId: null
            },
            {
                message: 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
                userId: 5,
                productId: 23,
                parentCommentId: 27
            },
            {
                message: 'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
                userId: 4,
                productId: 5,
                parentCommentId: 83
            },
            {
                message: 'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitaequam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donecposuere metus vitae ipsum.',
                userId: 3,
                productId: 29,
                parentCommentId: 71
            },
            {
                message: 'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
                userId: 1,
                productId: 28,
                parentCommentId: null
            },
            {
                message: 'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
                userId: 2,
                productId: 13,
                parentCommentId: 8
            },
            {
                message: 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
                userId: 3,
                productId: 31,
                parentCommentId: null
            },
            {
                message: 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
                userId: 4,
                productId: 4,
                parentCommentId: 30
            },
            {
                message: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed,nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
                userId: 5,
                productId: 34,
                parentCommentId: null
            },
            {
                message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
                userId: 6,
                productId: 11,
                parentCommentId: 88
            },
            {
                message: 'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien utnunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metusvitae ipsum. Aliquam non mauris.',
                userId: 7,
                productId: 35,
                parentCommentId: 41
            },
            {
                message: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
                userId: 8,
                productId: 28,
                parentCommentId: 92
            },
            {
                message: 'Aenean lectus. Pellentesque eget nunc.',
                userId: 9,
                productId: 1,
                parentCommentId: null
            }
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Comments', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Comments', null, {});

    }
};