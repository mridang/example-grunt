An reference project on how I set up a Grunt toolchain with the following tools:

1. Babel
2. Prettier
3. JSHint
4. ESLint
5. Lebab


# Testing

```
npx mocha --reporter=markdown
npx nyc --reporter=html --reporter=text mocha
npx nyc --reporter=html --reporter=text mocha --reporter=markdown
```

## Choosing a Node Version

Use only LTS versions and define that in the `.nvmrc` file

## Updating packages downloaded from the registry

Updating local and global packages you downloaded from the registry helps 
keep your code and tools stable, usable, and secure.

### Updating local packages

We recommend regularly updating the local packages your project depends on 
to improve your code as improvements to its dependencies are made.

Navigate to the root directory of your project and ensure it contains a 
package.json file:

```
cd /path/to/project
```

In your project root directory, run the update command:

```
npm update
```

To test the update, run the outdated command. There should not be any output.

```
npm outdated
```

