import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */


class UserDetail extends Component {

    render() {

    const dataPrice =[{
        "subsidy": 9,
        "discount_subsidy": 6,
        "discount_cutoff": 600
    }];


    const transactions =[

        {   "id": 1,
            "description": "Granite Keyboard",
            "date": "2019-02-20T15:06:32.153Z",
            "price": 1675
        },
        {
            "id": 2,
            "description": "Generic Wooden Bacon",
            "date": "2019-03-08T17:58:17.636Z",
            "price": 2540
        },
        {
            "id": 3,
            "description": "Pants",
            "date": "2019-03-11T11:48:04.699Z",
            "price": 1558
        },
        {   "id": 4,
            "description": "Awesome Mouse",
            "date": "2019-03-10T14:57:47.403Z",
            "price": 2002
        },
        {
             "id": 5,
            "description": "Licensed Frozen Pizza",
            "date": "2019-03-10T21:40:31.226Z",
            "price": 2877
        },
        {
            "id": 6,
            "description": "Frozen Soap",
            "date": "2019-03-09T13:37:54.146Z",
            "price": 1351
        },
        {
            "id": 7,
            "description": "Incredible Wooden Pizza",
            "date": "2019-03-11T11:55:45.363Z",
            "price": 1213
        },
        {
            "id": 8,
            "description": "Handmade Fresh Soap",
            "date": "2019-03-14T07:28:17.278Z",
            "price": 1731
        },{
            "description": "Licensed Frozen Pizza",
            "date": "2019-03-10T21:40:31.226Z",
            "price": 2877
        },
        {
            "id": 9,
            "description": "Frozen Soap",
            "date": "2019-03-09T13:37:54.146Z",
            "price": 1351
        },
        {
            "id": 10,
            "description": "Incredible Wooden Pizza",
            "date": "2019-03-11T11:55:45.363Z",
            "price": 1213
        },
        {
            "description": "Handmade Fresh Soap",
            "date": "2019-03-14T07:28:17.278Z",
            "price": 1731
        },
        {
            "description": "Generic Plastic Pizza",
            "date": "2019-03-11T05:46:13.508Z",
            "price": 2927
        },
        {
            "description": "Metal Chair",
            "date": "2019-03-09T11:21:39.924Z",
            "price": 1852
        },
        {
            "description": "Ergonomic Keyboard",
            "date": "2019-03-11T15:54:34.370Z",
            "price": 2910
        },
        {
            "description": "Wooden Towels",
            "date": "2019-03-13T07:16:40.135Z",
            "price": 2956
        },
        {
            "description": "Tasty Pizza",
            "date": "2019-03-13T05:26:23.393Z",
            "price": 2397
        },
        {
            "description": "Handmade Granite Pants",
            "date": "2019-03-14T14:58:41.006Z",
            "price": 2725
        },
        {
            "description": "Rustic Wooden Chips",
            "date": "2019-03-13T08:24:49.560Z",
            "price": 281
        },
        {
            "description": "Refined Hat",
            "date": "2019-03-14T08:07:13.147Z",
            "price": 2035
        },
        {
            "description": "Refined Wooden Hat",
            "date": "2019-03-09T06:41:01.347Z",
            "price": 298
        },
        {
            "description": "Fantastic Granite Bacon",
            "date": "2019-03-10T22:07:28.690Z",
            "price": 2259
        },
        {
            "description": "Licensed Frozen Computer",
            "date": "2019-03-10T16:50:50.143Z",
            "price": 2472
        },
        {
            "description": "Fresh Fish",
            "date": "2019-03-14T08:10:33.475Z",
            "price": 1278
        },
        {
            "description": "Ergonomic Shirt",
            "date": "2019-03-13T13:52:43.413Z",
            "price": 1016.12
        },
        {
            "description": "Rustic Frozen Shoes",
            "date": "2019-03-10T02:23:17.919Z",
            "price": 896
        },
        {
            "description": "Concrete Pants",
            "date": "2019-03-11T18:04:32.563Z",
            "price": 1090
        },
        {
            "description": "Rubber Cheese",
            "date": "2019-03-09T06:13:49.600Z",
            "price": 2111.3
        },
        {
            "description": "Practical Rubber Towels",
            "date": "2019-02-23T03:56:48.917Z",
            "price": 2044
        },
        {
            "description": "Awesome Granite Soap",
            "date": "2019-02-26T21:50:27.959Z",
            "price": 789
        },
        {
            "description": "Rustic Keyboard",
            "date": "2019-03-07T21:16:04.350Z",
            "price": 2576
        },
        {
            "description": "Practical Fresh Bacon",
            "date": "2019-03-06T07:35:34.799Z",
            "price": 1173
        },
        {
            "description": "Handmade Steel Computer",
            "date": "2019-02-28T15:06:37.527Z",
            "price": 784
        },
        {
            "description": "Handcrafted Frozen Chair",
            "date": "2019-03-07T01:19:47.929Z",
            "price": 2707
        },
        {
            "description": "Gorgeous Granite Gloves",
            "date": "2019-02-27T19:15:09.357Z",
            "price": 2665
        },
        {
            "description": "Generic Keyboard",
            "date": "2019-02-27T16:04:43.112Z",
            "price": 2401
        },
        {
            "description": "Generic Concrete Table",
            "date": "2019-03-03T03:42:40.750Z",
            "price": 2714
        },
        {
            "description": "Practical Granite Bike",
            "date": "2019-03-01T19:46:07.356Z",
            "price": 1214
        },
        {
            "description": "Cotton Pizza",
            "date": "2019-03-01T12:41:03.311Z",
            "price": 2131
        },
        {
            "description": "Generic Plastic Table",
            "date": "2019-03-07T21:13:55.225Z",
            "price": 2545
        },
        {
            "description": "Fantastic Frozen Chicken",
            "date": "2019-03-03T23:45:01.351Z",
            "price": 1412
        },
        {
            "description": "Gorgeous Soft Soap",
            "date": "2019-03-08T10:14:39.889Z",
            "price": 2866.67
        },
        {
            "description": "Intelligent Rubber Keyboard",
            "date": "2019-03-05T08:07:09.670Z",
            "price": 254
        },
        {
            "description": "Cheese",
            "date": "2019-03-03T22:16:51.964Z",
            "price": 2283
        },
        {
            "description": "Rubber Bike",
            "date": "2019-03-01T02:45:50.745Z",
            "price": 1553
        },
        {
            "description": "Awesome Cotton Cheese",
            "date": "2019-03-03T22:33:48.799Z",
            "price": 1602
        },
        {
            "description": "Intelligent Wooden Mouse",
            "date": "2019-03-04T18:31:22.393Z",
            "price": 561
        },
        {
            "description": "Fantastic Cotton Ball",
            "date": "2019-03-05T20:34:18.066Z",
            "price": 1973
        },
        {
            "description": "Refined Fresh Soap",
            "date": "2019-03-02T01:28:00.622Z",
            "price": 878
        },
        {
            "description": "Small Cotton Ball",
            "date": "2019-03-07T10:19:36.761Z",
            "price": 1818
        },
        {
            "description": "Computer",
            "date": "2019-03-08T10:47:49.200Z",
            "price": 1177
        },
        {
            "description": "Fantastic Cheese",
            "date": "2019-03-06T09:28:15.384Z",
            "price": 2699
        },
        {
            "description": "Refined Wooden Chair",
            "date": "2019-02-27T21:41:24.494Z",
            "price": 1688
        },
        {
            "description": "Handmade Fresh Gloves",
            "date": "2019-03-01T09:37:20.611Z",
            "price": 1623
        },
        {
            "description": "Licensed Rubber Hat",
            "date": "2019-02-27T00:25:00.626Z",
            "price": 1147
        },
        {
            "description": "Unbranded Soft Salad",
            "date": "2019-03-08T15:58:46.089Z",
            "price": 2340
        },
        {
            "description": "Chips",
            "date": "2019-03-07T04:09:04.995Z",
            "price": 2291
        },
        {
            "description": "Fresh Chips",
            "date": "2019-03-02T04:50:01.524Z",
            "price": 654
        },
        {
            "description": "Unbranded Chair",
            "date": "2019-03-02T06:16:27.373Z",
            "price": 1583
        },
        {
            "description": "Ergonomic Fresh Ball",
            "date": "2019-03-01T01:50:18.856Z",
            "price": 2037.95
        },
        {
            "description": "Licensed Cotton Car",
            "date": "2019-02-23T20:04:50.996Z",
            "price": 387
        },
        {
            "description": "Concrete Chicken",
            "date": "2019-02-24T04:42:51.359Z",
            "price": 1896
        },
        {
            "description": "Rubber Chips",
            "date": "2019-02-24T12:23:13.559Z",
            "price": 2711
        },
        {
            "description": "Rubber Cheese",
            "date": "2019-02-25T23:05:40.292Z",
            "price": 540
        },
        {
            "description": "Tasty Granite Ball",
            "date": "2019-02-25T05:52:43.369Z",
            "price": 2307
        },
        {
            "description": "Frozen Towels",
            "date": "2019-02-24T21:02:35.807Z",
            "price": 1749
        },
        {
            "description": "Unbranded Steel Cheese",
            "date": "2019-02-25T01:19:50.194Z",
            "price": 1538
        },
        {
            "description": "Handcrafted Fresh Table",
            "date": "2019-02-24T20:13:31.687Z",
            "price": 2493
        },
        {
            "description": "Small Granite Soap",
            "date": "2019-02-26T15:49:27.295Z",
            "price": 1577
        },
        {
            "description": "Licensed Bike",
            "date": "2019-02-19T14:44:53.636Z",
            "price": 2080
        },
        {
            "description": "Tasty Sausages",
            "date": "2019-02-23T09:56:48.473Z",
            "price": 2207
        },
        {
            "description": "Refined Steel Hat",
            "date": "2019-02-23T17:00:45.732Z",
            "price": 2152
        },
        {
            "description": "Licensed Concrete Computer",
            "date": "2019-02-23T23:21:23.176Z",
            "price": 1589.01
        },
        {
            "description": "Handmade Soft Computer",
            "date": "2019-02-23T21:42:53.187Z",
            "price": 2194
        },
        {
            "description": "Small Cheese",
            "date": "2019-02-23T16:35:11.156Z",
            "price": 1575
        },
        {
            "description": "Generic Granite Towels",
            "date": "2019-02-22T16:39:53.655Z",
            "price": 727
        },
        {
            "description": "Licensed Soft Ball",
            "date": "2019-02-23T05:45:50.873Z",
            "price": 1989
        },
        {
            "description": "Frozen Computer",
            "date": "2019-02-17T11:23:21.551Z",
            "price": 998
        },
        {
            "description": "Sleek Soft Keyboard",
            "date": "2019-02-15T22:42:05.609Z",
            "price": 581
        },
        {
            "description": "Rustic Concrete Shirt",
            "date": "2019-02-18T15:10:55.252Z",
            "price": 507
        },
        {
            "description": "Tasty Granite Chicken",
            "date": "2019-02-22T05:37:32.437Z",
            "price": 931
        },
        {
            "description": "Granite Pants",
            "date": "2019-02-20T19:01:21.452Z",
            "price": 1182
        },
        {
            "description": "Licensed Frozen Pizza",
            "date": "2019-02-16T13:04:24.864Z",
            "price": 1316
        },
        {
            "description": "Gorgeous Fresh Computer",
            "date": "2019-02-17T14:37:20.223Z",
            "price": 867
        },
        {
            "description": "Sleek Wooden Car",
            "date": "2019-02-18T17:11:02.765Z",
            "price": 2133
        },
        {
            "description": "Soft Shirt",
            "date": "2019-02-21T19:12:31.249Z",
            "price": 2475
        },
        {
            "description": "Steel Sausages",
            "date": "2019-02-16T22:49:33.454Z",
            "price": 988
        },
        {
            "description": "Concrete Chicken",
            "date": "2019-02-16T11:18:23.952Z",
            "price": 1107
        },
        {
            "description": "Rustic Wooden Pizza",
            "date": "2019-02-18T14:50:51.719Z",
            "price": 1408
        },
        {
            "description": "Cotton Cheese",
            "date": "2019-02-16T07:39:41.684Z",
            "price": 518
        },
        {
            "description": "Chicken",
            "date": "2019-02-22T08:48:25.423Z",
            "price": 2171
        },
        {
            "description": "Fantastic Soft Keyboard",
            "date": "2019-02-17T02:45:19.633Z",
            "price": 2196
        },
        {
            "description": "Rustic Wooden Fish",
            "date": "2019-02-22T19:42:10.924Z",
            "price": 2856
        },
        {
            "description": "Refined Cotton Tuna",
            "date": "2019-02-22T00:13:29.475Z",
            "price": 1419
        },
        {
            "description": "Fantastic Shirt",
            "date": "2019-02-21T17:17:30.492Z",
            "price": 799
        },
        {
            "description": "Handcrafted Cotton Chips",
            "date": "2019-02-15T18:06:47.227Z",
            "price": 2280
        },
        {
            "description": "Cotton Bacon",
            "date": "2019-02-15T01:58:06.071Z",
            "price": 929
        },
        {
            "description": "Handcrafted Granite Table",
            "date": "2019-02-14T15:00:18.994Z",
            "price": 2737
        },
        {
            "description": "Rubber Shoes",
            "date": "2019-02-13T05:30:01.799Z",
            "price": 2284
        },
        {
            "description": "Rubber Chair",
            "date": "2019-02-13T00:07:49.431Z",
            "price": 452
        },
        {
            "description": "Fresh Chair",
            "date": "2019-02-12T18:48:37.382Z",
            "price": 1131
        }
    ];

    const listItems = transactions.map((d) => <li key={d.id}>
        <p className="data-stretch">{d.description}</p>
        <p className="data-stretch">{d.date}</p>
        <p className="data-stretch">{d.price}</p>
        </li>);

        if (!this.props.user) {
            return (<div>Select a Client</div>);
        }
        return (
            <div className="container-1">
                <div className="box-2">
                    <p><strong>{this.props.user.first}</strong></p>
                    <span className="header-labels">{this.props.user.count}<br />
                    {this.props.user.countnum}
                    </span>
                    <span className="header-labels">{this.props.user.total}<br />
                    {this.props.user.totalnum}</span>
                    <span className="header-labels">{this.props.user.subsidy}<br />
                    {this.props.user.subsidynum}</span>
                    <img src={this.props.user.thumbnail} />
                </div>
                 <div className="box-1">
                    <h6>Description</h6><h6>Date</h6><h6>Total</h6>
                    {listItems }
                </div> 
            </div>
        );
    }
}




// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);

