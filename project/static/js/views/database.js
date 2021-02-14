export class Database {
    constructor(collectionName) {
        this.collectionName = collectionName
       }

    onNew(obj) {
    }

    onDelete(obj) {
        
    }

    onUpdate(obj) {
        
    }
    clear() {
        localStorage.removeItem(this.collectionName)
    }
    create(obj) {
        const items = this.getAll()
        const ids = JSON.parse(localStorage.getItem('ids')) || {}
        const id = (ids[this.collectionName] || 0)
        obj.id = id + 1 
        ids[this.collectionName] = id + 1
        items.push(obj)
        localStorage.setItem('ids', JSON.stringify(ids))
        localStorage.setItem(this.collectionName, JSON.stringify(items))
        this.onNew(obj)
        return obj
    }

    get(attribute, value) {
        return this.getAll().find(e => e[attribute] == value)
    }

    getById(id) {
        return this.get('id',id)
    }
    delete(id) {
        if (typeof(id) !== "number") {
            return console.error("number is needed as an id ", id, " provided instead")
        }
        const items = this.getAll()
        const newItems = items.filter(e => e.id != id)
        localStorage.setItem(this.collectionName, JSON.stringify(newItems))
    }

    getAll() {
        return JSON.parse(localStorage.getItem(this.collectionName)) || []
    }

    update(obj) {
        if (!obj.id) {
            return console.error('no id provided')
        }
        const items = this.getAll()
        const newItems = items.map(e => e.id === obj.id ? obj : e)
        localStorage.setItem(this.collectionName, JSON.stringify(newItems))
        console.log('\t\t\tupdated item ' + obj.id)
    }

}