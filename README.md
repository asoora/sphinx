# SPHINX

영어 문제 자동 생성 웹서비스.

Python3 + Django + Nginx

## Introduction

모든 대화(논의 사항, 버그 및 에러, 새로운 기능 등)는 `Issues` 기능을 적극 활용한다.

각 이슈 담당자는 아래의 예시를 참고해서 `branch` 생성 후 이슈를 처리한다.

이슈 브랜치 예시:

```sh
$ git checkout -b iss22
$ vim main.py
$ git commit -a -m 'added the new function [issue 22]'
$ git checkout master
$ git merge iss22
$ git branch -d iss22
```

### Plans

문제 생성 기능은 두 가지 타입을 제공한다.
내신 타입과 수능 타입이다.
내신 타입을 먼저 개발하고 추후에 수능 타입을 추가한다.

문제 수정 기능은 두 가지 버전을 제공한다.
일반 사용자용과 고급 사용자용이다.
일반 사용자용은 문제 수정 자유도가 낮은 버전을 의미한다.
고급 사용자용은 문제 수정 자유도가 높은 버전을 의미한다.

한 가지 문제 유형에 대한 자동 생성을 목표로 프로토타입을 빠르게 개발하고, 점진적으로 유형을 추가한다.

## Getting Started

### Prerequisites

```sh
$ ...
```

### Installing

```sh
$ ...
```

## Running the tests

```sh
$ ...
```

## Deployment

```sh
$ ...
```