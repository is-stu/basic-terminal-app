# Basic Node.js Project - Terminal

## Getting Started

### Prerequisites

- Node.js

### Installation

1. Clone the repository

```sh
git clone https://github.com/is-stu/basic-terminal-app.git
```

2. Install dependencies

```sh
npm install
```

3. Run the application

```sh
npm run dev
```

## Usage

```sh
node ./src/app.js -b <base number> -l <limit number> -s <show table> -n <file name> -p <file path>
```

Example:

```sh
node ./src/app.js -b 3 -l 10 -s true -n "test.txt" -p "outputs"
```

This will create a file named `test.txt` in the `outputs` directory with the following content:

```
========================
 MULTIPLICATION TABLE 3
========================
1 x 3 = 3
2 x 3 = 6
3 x 3 = 9
4 x 3 = 12

...
```
