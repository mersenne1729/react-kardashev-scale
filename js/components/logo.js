var React = require('react');
var ReactDOM = require('react-dom');

// var Person = function() {
//     var name = 'Derek Zoolander';
//     var imageUrl = 'http://uifaces.com/assets/static/images/zoolander.jpg';
//     var job = 'Male model';
//     return (
//         <div className="person">
//             <div className="person-name">{name}</div>
//             <img className="person-img" src={imageUrl} />
//             <div className="person-job">
//                 {job}
//             </div>
//         </div>
//     );
// };

var Logo = function() {
    
    return (
      <div className="logo">
            <a href="#">Kardashev Scale</a>
        </div>
    );
};

module.exports = Logo;