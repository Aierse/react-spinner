## @aierse/react-spinner

That is simple spinner component

한글 문서 https://aierse.tistory.com/25

## Installation

`npm i @aierse/react-spinner`

## Usage

```js
import Spinner from '@aierse/react-spinner'

function Example() {
  return (
    <>
      {/* Bricks Animation */}
      <Spinner.Bricks open={true} diameter={20} />
      {/* Spin Animation */}
      <Spinner.Spin open={true} color={'#ff2c2c'} />
      {/* Collision Animation */}
      <Spinner.Collision open={true} />
    </>
  )
}
```
