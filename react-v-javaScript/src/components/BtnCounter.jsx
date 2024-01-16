export default function BtnCounter({count, setCount}) {
return (
    <>
    <h3>You've clicked me {count} times you loonatick!</h3>
    <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
)
}