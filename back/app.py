from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

categorydata = [
    {
        'name': 'Dress',
        'subcate': [
            {'name': 'Dress', 'items': ['Homecoming Dresses', 'Ball Gown Dresses', 'Formal Dresses', 'Designer Dresses',
                                        'Fast Delivery Dresses ererer']},
            {'name': 'Wedding Dress',
             'items': ['Wedding Dresses 2018', 'Wedding Dresses 2018', 'Wedding Dresses 2018', 'Wedding Dresses 2018']},
            {'name': 'Bridesmaid Dress',
             'items': ['Bridesmaid Dresses 2016', 'Bridesmaid Dresses 2016', 'Bridesmaid Dresses 2016']},
            {'name': 'Flower Girl Dress', 'items': ['Girls Party Dresses', 'Girls Party Dresses']},
        ]
    }, {
        'name': 'Computer',
        'subcate': [
            {'name': 'Computer1',
             'items': ['Homecoming Computer', 'Ball Gown Computer', 'Formal Computer', 'Designer Computer',
                       'Fast Delivery Computer ererer']},
            {'name': 'Wedding Computer',
             'items': ['Wedding Computer 2018', 'Wedding Computer 2018', 'Wedding Computer 2018',
                       'Wedding Computer 2018']},
            {'name': 'Bridesmaid Computer',
             'items': ['Bridesmaid Computer 2016', 'Bridesmaid Computer 2016', 'Bridesmaid Computer 2016']},
            {'name': 'Flower Girl Computer', 'items': ['Girls Party Computer', 'Girls Party Computer']},
        ]
    },
    {
        'name': 'Phone',
        'subcate': [
            {'name': 'Phone', 'items': ['Homecoming Phone', 'Ball Gown Phone', 'Formal Phone', 'Designer Phone',
                                        'Fast Delivery Phone ererer']},
            {'name': 'Wedding Phone',
             'items': ['Wedding Phone 2018', 'Wedding Phone 2018', 'Wedding Phone 2018', 'Wedding Phone 2018']},
            {'name': 'Bridesmaid Phone',
             'items': ['Bridesmaid Phone 2016', 'Bridesmaid Phone 2016', 'Bridesmaid Phone 2016']},
            {'name': 'Flower Girl Phone', 'items': ['Girls Party Phone', 'Girls Party Phone']},
        ]
    }, {
        'name': 'Bags',
        'subcate': [
            {'name': 'Bags', 'items': ['Homecoming Bags', 'Ball Gown Bags', 'Formal Bags', 'Designer Bags',
                                       'Fast Delivery Bags ererer']},
            {'name': 'Wedding Bags',
             'items': ['Wedding Bags 2018', 'Wedding Bags 2018', 'Wedding Bags 2018', 'Wedding Bags 2018']},
            {'name': 'Bridesmaid Bags',
             'items': ['Bridesmaid Bags 2016', 'Bridesmaid Bags 2016', 'Bridesmaid Bags 2016']},
            {'name': 'Flower Girl Bags', 'items': ['Girls Party Bags', 'Girls Party Bags']},
        ]
    }
]
sliderimgurls = [
    {
        'name': '1',
        'url': 'http://img.fancyecommerce.com/appfront/images/en_3.jpg'
    },
    {
        'name': '2',
        'url': 'http://img.fancyecommerce.com/appfront/images/en_2.jpg'
    },
    {
        'name': '3',
        'url': 'http://img.fancyecommerce.com/appfront/images/en_1.jpg'
    },
    {
        'name': '4',
        'url': 'http://img.fancyecommerce.com/appfront/images/en_2.jpg'
    },
]

banner1urls = [
    "http://img.fancyecommerce.com/appfront/images/free_en.jpg",
    "http://img.fancyecommerce.com/appfront/images/new.jpg",
    "http://img.fancyecommerce.com/appfront/images/vip.jpg"
]

banner2urls = [
    'http://img.fancyecommerce.com/appfront/images/en_a.jpg',
    'http://img.fancyecommerce.com/appfront/images/sammy.jpg'
]


@app.route('/catedata')
def catedata():
    return jsonify({'data': categorydata})


@app.route('/sliderimgurls')
def sliderdata():
    return jsonify({'data': sliderimgurls})


@app.route('/banner1img')
def banner1img():
    return jsonify({'data': banner1urls})


@app.route('/banner2img')
def banner2img():
    return jsonify({'data': banner2urls})


if __name__ == '__main__':
    CORS(app, supports_credentials=True)
    app.run(debug=True)
