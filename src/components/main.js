import Item from './item';
import { useRef , useContext} from 'react';
import { TasksContext } from './tasksContext';

const Main = () => {
    return (
        <main>
            <AddItemSection/>
            <ViewSection/>
            <AnalyticsSection/>
        </main>
    )
}

const AddItemSection = () => {
    return (
    <section id="add-item">
        <h2>Add Item</h2>
        <InpForm/>
    </section>
    )
}
var counter = (function(initial) {
    var count = initial;
    return function() {
        return ++count;
    }
});

let count = counter(2)
const InpForm = () => {
    const {items, setItems} = useContext(TasksContext)
    const handleAdd = (e) => {
        e.preventDefault()

        let name = document.getElementById('item-name').value
        let quantity = document.getElementById('item-quantity').value
        let price = document.getElementById('item-price').value
        setItems(prevItems => 
            {
                return prevItems.concat([{id : count(), item : name, quantity : quantity, price: price}])
            }
        )
    }
    return (
        <form>
            <label htmlFor="item-name">Name</label>
            <input type="text" id="item-name" name="item-name" required/>
            
            <label htmlFor="item-quantity">Quantity</label>
            <input type="text" id="item-quantity" name="item-quantity" required/>
            
            <label htmlFor="item-price">Quality</label>
            <input type="text" id="item-price" name="item-price" required/>
            
            <input onClick={handleAdd} type="submit" value="Add" />
        </form>
    )
}

const ViewSection = () => {
    const {items, setItems} = useContext(TasksContext)
    return (
        <section id="view-inventory">
            <h2>View Inventory</h2>
            <table>
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th></th>
                </tr>
                {items.map(item => <Item key = {item.id} item = {item}/>)}
            </thead>
            </table>
        </section>
    )
}

const AnalyticsSection = () => {
    return (
        <section id="analytics">
            <h2>Analytics </h2>
            <div>0 Items left</div>
        </section>
    )
}

export default Main;