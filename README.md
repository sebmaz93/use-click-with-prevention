<div align="center">
<h1>use-click-with-prevention</h1>

<p>a custom react hook to prevent singleClick while doubleClick is fired
</p>
</div>

---

<!-- prettier-ignore-start -->
![Build Status](https://img.shields.io/travis/com/sebmaz93/use-click-with-prevention?style=plastic)
![Version](https://img.shields.io/npm/v/use-click-with-prevention)
![Downloads](https://img.shields.io/npm/dm/use-click-with-prevention)
<!-- prettier-ignore-end -->

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
- [Issues](#issues)
    - [🐛 Bugs](#-bugs)
    - [💡 Feature requests](#-feature-requests)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via NPM which is bundled with NodeJS and
should be installed as one of your project's dependencies:

`npm install use-click-with-prevention`

## Usage

```
import useClickWithPrevention from 'use-click-with-prevention'

const MyComponent = () => {

  const singleClick = () => {
    // do something
  }
  const doubleClick = () => {
    // do something else
  }
  
  // useClickWithPreventio 3rd argument optional = delay: number
  const [onClick,onDoubleClick] = useClickWithPrevention(singleClick,doubleClick [,delay]);
  
  return (
    <div>
      <button onClick={onClick} onDoubleClick={onDoubleClick}>Click Me!</button>
    </div>
  )
}
```

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

## LICENSE

MIT