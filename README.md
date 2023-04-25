Description of App Built Using MERN Stack
=========================================

Hi there, I am Anusha Reddy and I have built an app using the MERN stack. The MERN stack is a popular web development stack that comprises four main technologies, namely MongoDB, Express.js, React.js, and Node.js.

Main Features of the App
------------------------

The main features of the app are as follows:

### User Schema

The app uses a user schema to store and manage user data. A schema is a blueprint that defines the structure of a document in MongoDB. The user schema defines the properties and data types for each user document.

```
const userSchema = mongoose.Schema({
    id:{type : Number},
    first_name: {type: String , required:true},
    last_name : {type: String , required:true},
    email: {type: String , required:true},
    gender:{type: String , required:true},
    income:{type: String , required:true},
    city:{type: String , required:true},
    car:{type: String , required:true},
    quote:{type: String , required:true},
    phone_price:{type: String , required:true},  
    
});
```

### Fetching of API

The app uses MongoDB queries and the `find()` function to fetch data from the database. MongoDB queries are used to filter and sort data, and the `find()` function is used to retrieve data from a collection in the database.

```
export const getData1 = async (req, res) => {
  try {
    const users = await User.find({
      car: { $in: ["BMW", "Mercedes-Benz"] },
    });
    const filteredUsers = users.filter(
      (user) => parseFloat(user.income.substring(1)) <= 5
    );
    res.status(200).json(filteredUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
```

The fetched data is then passed to the front-end of the app, where it is displayed to the user.

```
useEffect(() => {
    const getData = async (ind, setData, setLoading) => {
      try {
        const res = await API.get(`/data${ind}`);
        const dt = await res.data;
        setData(dt);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    getData(1, setData1, setLoading1);
    getData(2, setData2, setLoading2);
    getData(3, setData3, setLoading3);
    getData(4, setData4, setLoading4);
    getData(5, setData5, setLoading5);
  }, []);
  ```
  
### Displaying Table

The app uses Bootstrap to display tables. Bootstrap is a popular front-end development framework that provides a set of tools and components for building responsive and mobile-first websites.

```
            <tbody>
                {paginatedItems.slice(0, 20).map((item, ind) => (
                  <tr key={item.id}>
                    <th scope="row">{ind + currentPage * itemsPerPage + 1}</th>
                    <td>
                      {item.first_name} {item.last_name}
                    </td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                    <td>{item.income}</td>
                    <td>{item.city}</td>
                    <td>{item.car}</td>
                    <td>{item.phone_price}</td>
                    <td
                      className="quote"
                      onClick={(e) => {
                        e.target.classList.toggle("white-space");
                      }}
                    >
                      "{item.quote}"
                    </td>
                  </tr>
                ))}
              </tbody>
 ```
 
Tables are a common way of displaying data in web applications, and Bootstrap provides a number of classes and styles for creating tables that are easy to read and navigate.

Conclusion
----------

In summary, the app built using the MERN stack has three main features: a user schema, fetching of API, and displaying tables using Bootstrap. These features work together to provide users with a seamless and intuitive experience when interacting with the app.
