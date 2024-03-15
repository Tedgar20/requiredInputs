# Jest cant read required inputs in afterNextRender or afterRender hook

- If you have a component that has a required input(input.required<>()) and you use that input in the afterNextRender or afterRender hooks than jest will throw an error that the input has no value
- Useing "fixture.componentRef.setInput" still produces the error
- Creating a parent component in the test and providing the input to the child component that you actually want to test also throws the error

# Reproduce the issue

1. Pull down this project
2. npm i (make sure you're on Node >= 20)
3. npm run test
