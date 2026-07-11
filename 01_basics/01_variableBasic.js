const accountId = 23009
let accountName = "Vishal"
var accountCity = "Noida"
accountEmail = "vishal@gmail.com"
let accountMoney;

console.log(accountId);
console.log(accountCity);
console.table([accountId, accountName, accountCity, accountEmail, accountMoney])

/*
# JavaScript Variables – Quick Revision

## 1. `const`

* Used for values that should **not be reassigned**.
* Must be initialized when declared.
* Preferred by default if the value won't change.

```javascript
const accountId = 23009;
```

---

## 2. `let`

* Used for variables whose value **can change**.
* Block-scoped (`{}`).
* Recommended over `var`.

```javascript
let accountName = "Vishal";
accountName = "Rahul"; // ✅ Allowed
```

---

## 3. `var`

* Older way of declaring variables.
* Function-scoped, not block-scoped.
* Can cause unexpected bugs due to scope and hoisting.
* **Avoid using `var` in modern JavaScript.**

```javascript
var city = "Noida";
```

---

## 4. `undefined`

* A variable declared without a value has the value `undefined`.

```javascript
let accountMoney;

console.log(accountMoney); // undefined
```

---

## 5. Always declare variables

❌ Don't do this:

```javascript
accountEmail = "vishal@gmail.com";
```

✅ Do this:

```javascript
let accountEmail = "vishal@gmail.com";
```

Always use `let`, `const`, or `var` while declaring variables.

---

## 6. Printing Output

```javascript
console.log(accountId);
```

Prints one value.

```javascript
console.table([accountId, accountName, accountEmail, accountCity]);
```

Prints multiple values in a table.

---

## 7. Which one should I use?

* `const` → Value will **not change**. ✅ (Most preferred)
* `let` → Value **may change**. ✅
* `var` → Avoid using. ❌

---

### Easy Rule to Remember

* **const** = Fixed value
* **let** = Changeable value
* **var** = Old method (avoid)
* **undefined** = Variable exists but has no value yet

 */