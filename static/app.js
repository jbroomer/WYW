'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./button.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById('contents');

var BodyRow = function BodyRow(props) {
  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      null,
      props.userData.height
    ),
    _react2.default.createElement(
      'td',
      null,
      props.userData.weight
    ),
    _react2.default.createElement(
      'td',
      null,
      props.userData.age
    ),
    _react2.default.createElement(
      'td',
      null,
      props.userData.activity
    ),
    _react2.default.createElement(
      'td',
      null,
      props.userData.gender
    )
  );
};

function BodyStats(props) {
  var bodyData = props.bodystats.map(function (userData, index) {
    return _react2.default.createElement(BodyRow, { key: index, userData: userData });
  });
  return _react2.default.createElement(
    'div',
    { style: { textAlign: 'center' } },
    _react2.default.createElement(
      'table',
      { style: { fontFamily: 'Bookman Old Style', marginLeft: '37%' } },
      _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'th',
            null,
            'Height'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Weight'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Age'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Activity'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Gender'
          )
        )
      ),
      _react2.default.createElement(
        'tbody',
        null,
        bodyData
      )
    )
  );
}

var NutritionStats = function (_React$Component) {
  _inherits(NutritionStats, _React$Component);

  function NutritionStats() {
    _classCallCheck(this, NutritionStats);

    return _possibleConstructorReturn(this, (NutritionStats.__proto__ || Object.getPrototypeOf(NutritionStats)).apply(this, arguments));
  }

  _createClass(NutritionStats, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { fontFamily: 'Bookman Old Style', fontStyle: 'bold', fontSize: '25px', textAlign: 'center' } },
        _react2.default.createElement(
          'h1',
          null,
          'Suggested Caloric Intake: '
        ),
        _react2.default.createElement(
          'h1',
          { style: { color: 'green' } },
          this.props.calories
        )
      );
    }
  }]);

  return NutritionStats;
}(_react2.default.Component);

var AddBodyInfo = function (_React$Component2) {
  _inherits(AddBodyInfo, _React$Component2);

  function AddBodyInfo() {
    _classCallCheck(this, AddBodyInfo);

    var _this2 = _possibleConstructorReturn(this, (AddBodyInfo.__proto__ || Object.getPrototypeOf(AddBodyInfo)).call(this));

    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    return _this2;
  }

  _createClass(AddBodyInfo, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.updateBodyStat;
      this.props.update({
        height: form.height.value,
        weight: form.weight.value,
        age: form.age.value,
        activity: form.activity.value,
        gender: form.gender.value
      });
      // clear the form for the next input
      form.height.value = "";form.weight.value = "";form.age.value = "";form.activity.value = "";form.gender.value = "";
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { style: { fontFamily: 'Bookman Old Style' }, name: 'updateBodyStat', onSubmit: this.handleSubmit },
          _react2.default.createElement('input', { type: 'text', name: 'height', maxLength: '4', placeholder: 'Height (ft\'inches)', style: { borderRadius: '5px' } }),
          _react2.default.createElement('input', { type: 'text', name: 'weight', maxLength: '3', placeholder: 'Weight (lbs)', style: { borderRadius: '5px' } }),
          _react2.default.createElement('input', { type: 'text', name: 'age', maxLength: '2', placeholder: 'Age', style: { borderRadius: '5px' } }),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'label',
            { name: 'activity' },
            'Activity Level:'
          ),
          _react2.default.createElement(
            'select',
            { style: { marginRight: '20px' }, name: 'activity' },
            _react2.default.createElement(
              'option',
              null,
              'Light'
            ),
            _react2.default.createElement(
              'option',
              null,
              'Moderate'
            ),
            _react2.default.createElement(
              'option',
              null,
              'Vigorous'
            )
          ),
          _react2.default.createElement(
            'label',
            { name: 'gender' },
            'Biological Gender:'
          ),
          _react2.default.createElement(
            'select',
            { name: 'gender' },
            _react2.default.createElement(
              'option',
              null,
              'Male'
            ),
            _react2.default.createElement(
              'option',
              null,
              'Female'
            )
          ),
          _react2.default.createElement(
            'button',
            { style: { borderRadius: '5px' } },
            'Update'
          )
        )
      );
    }
  }]);

  return AddBodyInfo;
}(_react2.default.Component);

function calculate(h, w, age, g, activity) {
  var suggested = 0;
  w = parseInt(w);
  age = parseInt(age);
  var inches = parseInt(h.charAt(0)) * 12 + parseInt(h.substring(2, h.length));
  if (g === 'Male') {
    suggested = 66 + 6.2 * w + 12.7 * inches - 6.76 * age;
    if (activity === 'Light') {
      suggested = suggested * 1.53;
    }
    if (activity === 'Moderate') {
      suggested = suggested * 1.76;
    }
    if (activity === 'Vigorous') {
      suggested = suggested * 2.25;
    }
  } else {
    suggested = 655.1 + 4.35 * w + 4.7 * inches - 4.7 * age;
    if (activity === 'Light') {
      suggested = suggested * 1.53;
    }
    if (activity === 'Moderate') {
      suggested = suggested * 1.76;
    }
    if (activity === 'Vigorous') {
      suggested = suggested * 2.25;
    }
  }

  return Math.round(suggested);
}

var FitnessTracker = function (_React$Component3) {
  _inherits(FitnessTracker, _React$Component3);

  function FitnessTracker() {
    _classCallCheck(this, FitnessTracker);

    var _this3 = _possibleConstructorReturn(this, (FitnessTracker.__proto__ || Object.getPrototypeOf(FitnessTracker)).call(this));

    _this3.state = { bodystats: [], calories: 0 };
    _this3.update = _this3.update.bind(_this3);
    //this.calculate = this.calculate.bind(this);
    return _this3;
  }

  _createClass(FitnessTracker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }

    //Grabs data from server

  }, {
    key: 'loadData',
    value: function loadData() {
      var _this4 = this;

      fetch('/api/data').then(function (response) {
        if (response.ok) {
          //Returns whether there was a successful response
          response.json().then(function (data) {
            //Parses the body of the response as a JSON
            _this4.setState({ bodystats: data.records }); //Adds the saved data to the state on the load
            _this4.state.calories = calculate(_this4.state.bodystats[0].height, _this4.state.bodystats[0].weight, _this4.state.bodystats[0].age, _this4.state.bodystats[0].gender, _this4.state.bodystats[0].activity);
            _this4.setState({ calories: _this4.state.calories });
          });
        } else {
          response.json().then(function (error) {
            //If the response failed, returns an error
            alert("Failed to fetch bodyStat:" + error.message);
          });
        }
      }).catch(function (err) {
        alert("Error in fetching data from server:", err);
      });
    }

    //Updates User Body Stats

  }, {
    key: 'update',
    value: function update(userInput) {
      var _this5 = this;

      fetch('/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInput)
      }).then(function (res) {
        if (res.ok) {
          res.json().then(function (updatedStat) {
            _this5.state.bodystats[0] = updatedStat;
            _this5.setState({ bodystats: _this5.state.bodystats });
            _this5.state.calories = calculate(_this5.state.bodystats[0].height, _this5.state.bodystats[0].weight, _this5.state.bodystats[0].age, _this5.state.bodystats[0].gender, _this5.state.bodystats[0].activity);
            _this5.setState({ calories: _this5.state.calories });
          });
        } else {
          res.json().then(function (error) {
            alert('Failed to add update: ' + error.message);
          });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { style: { textAlign: "center" } },
        _react2.default.createElement(
          'h1',
          { style: { fontStyle: 'bold', fontSize: '100', fontFamily: 'Bookman Old Style', paddingBottom: '50px' } },
          'Calorie Calculator'
        ),
        _react2.default.createElement(BodyStats, { bodystats: this.state.bodystats }),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(AddBodyInfo, { update: this.update }),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(NutritionStats, { calories: this.state.calories })
      );
    }
  }]);

  return FitnessTracker;
}(_react2.default.Component);

ReactDOM.render(_react2.default.createElement(FitnessTracker, null), contentNode); // Render the component inside the content Node