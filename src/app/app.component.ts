import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    var chunk = _.chunk(['a', 'b', 'c', 'd'], 2); // Devided in to given size
    console.log('chunk:', chunk)

    var compact = _.compact([0, 1, false, true, 2, '', 3, null, 4, undefined]); // Falsy value Delete
    console.log('compact:', compact)

    var array = [1, 2];
    var concat = _.concat(array, 2, [3], [4]); // Array Concat
    console.log('concat:', concat)

    var arrayObj1 = [{ name: 'Chirag' }];
    var arrayObj2 = [{ name: 'Gohel' }];
    var concat_arrayObj2 = _.concat(arrayObj1, arrayObj2); // Array Concat
    console.log('concat1:', concat_arrayObj2)

    var difference = _.difference([2, 1], [2, 3]);
    console.log('difference:', difference)

    var drop1 = _.drop([1, 2, 3]);  // Slice of array Starting in begining Default Value 1
    console.log('drop1:', drop1)
    var drop2 = _.drop([1, 2, 3], 2); // Given Value 2
    console.log('drop2:', drop2)
    var drop3 = _.drop([1, 2, 3], 5); // Given Value 5
    console.log('drop3:', drop3)
    var drop4 = _.drop([1, 2, 3], 0); // Given Value 0
    console.log('drop4:', drop4)

    var users = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred', 'age': 40, 'active': false }
    ];

    var filter1 = _.filter(users, function (o) { return !o.active; }); // Filter False
    console.log('filter1:', filter1)

    var filter2 = _.filter(users, { 'age': 36, 'active': true }); // Filter Age with Active
    console.log('filter2:', filter2)

    var filter3 = _.filter(users, ['active', false]); // Filter Active With False
    console.log('filter3:', filter3)

    var filter4 = _.filter(users, 'active'); // Filter Active With True
    console.log('filter4:', filter4)

    var users1 = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred', 'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1, 'active': true }
    ];

    var find1 = _.find(users1, function (o) { return o.age < 40; }); // Find with age lessthen 40
    console.log('find1:', find1)

    var find2 = _.find(users1, { 'age': 1, 'active': true }); // Find with age and active
    console.log('find2:', find2)

    var find3 = _.find(users1, ['active', false]); // Find with active false
    console.log('find3:', find3)

    var find4 = _.find(users1, 'active'); // Find with active true
    console.log('find4:', find4)

    _.delay(function (text) {
      console.log("text", text);
    }, 1000, 'later');

    var flipped = _.flip(function () {
      return _.toArray(arguments);
    });

    console.log('flipped:', flipped());

    var object = { 'a': 1, 'b': 2 };
    var other = { 'c': 3, 'd': 4 };

    var values = _.memoize(_.values);
    console.log('values(object);:', values(object))
  }

}
