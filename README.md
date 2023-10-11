# Docker Build Test

---

- [Installation](#installation)
- [Usage](#usage)
    - [Usage on local](#usage-on-local)
    - [Usage on docker](#usage-on-docker)

Clone repository

```bash
https://github.com/burhon97/docker-build-test.git
```

## Installation

```bash
npm install
```

## Usage

Create Docker volume

```bash
docker volume create redis_data &&
docker volume create test_redis_data
```


### Usage on local

Compile the project

```bash
npm run compile
```

Create an run redis container on Docker

```bash
docker-compose up redis -d
```

Run project

```bash
npm start
```

### Usage on docker

Create and run redis & project container on Docker

```bash
docker-compose up -d
```