.PHONY: verify install test

verify: install test

install:
	npm ci

test:
	npm test
