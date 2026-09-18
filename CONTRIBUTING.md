# Contributing

This is a pnpm monorepo for the component library where each module under packages/ is published as an independent package on npmjs. This guide covers local setup, the day-to-day workflow, our code and commit conventions, and how to add a new package.

## Table of contents

- [Repo structure and where to work](#repo-structure-and-where-to-work)
- [Adding to the Component Library](#adding-to-the-component-library)
  - [Things to consider before you build your component](#things-to-consider-before-you-build-your-component)
  - [Design principles to follow](#design-principles-to-follow)
  - [tests](#tests)
  - [Techincal requirements](#technical-requirements)
- [Releases](#releases)

## Repo structure and where to work

This repo has been set up to have a central frontend package which holds all the CSS and JS needed for the components to work. Each framework then has it's own package which holds light wrappers to make authoring components in each framework as straight forward as possible.

There is also the gallery folder which has been set up for building your components in and testing.

You should split your work across the following repos

- [Gallery](/gallery/) - A frontend repo to test and build your components, draft your work here.
- [Frontend package](/packages/frontend/) - You should put your final central CSS and js files here
- Framework packages - where the final wrapper components should live.
  - [Svelte packages](/packages/svelte)
  - [React packages](/packages/react)
  - [Solid packages](/packages/solid)
  - [Astro packages](/packages/astro)

## Adding to the Component Library

This repo has been built so that your agent can help you add components to this library. In order to add to this library you should consider the following:

### Things to consider before you build your component

1. There should be a real need for the component:
  - Check that it is not already present in the i.AI component library
2. Check if another government department has already designed this component
  - If so, you can use this as a basis for your component

### Design principles to follow

Your component should look and feel like a government component. This means using the colour palette set out in the [i.AI Design Kit][https://i-ai-design-system.internal.i.ai.gov.uk/styles/colour-palette].

It should be fully accessible, at least passing [WCAG 2.0 criteria](https://www.w3.org/TR/WCAG20/).

### Tests

Your component should be testing lead. Depending on your use case you will need to ensure that the following tests fully cover your component and all pass:

Unique to GOV.UK components:

- Match GOV.UK Fixtures tests

  These check to see if it matches the expected output given by GOV.UK Frontend. You will have to write a matching function which matches the variant prop to the expected class or attribute output.

  If it is a simple component where the only check is to match attributes, html structure and classes you can follow the example of the [details component tests](/tests/src/component-tests/details/). 
  
  If you have a more complex fixture list where tests rely on children being rendered or more complex behaviour you can follow the example of the [Accordion component tests](/tests/src/component-tests/accordion/).

If the component has variant classes:

- Matches i.AI variant classes

  This should only be for variants which do not exist in normal GOV.UK as GOV.UK variants such as `govuk-checkboxes--small` will have been covered in the above matching gov.uk fixture tests.
  
  For new components which are not in GOV.UK Frontend you will need to add all the variant classes for these tests.

  You can follow the example of the [Link component variant tests](/tests/src/component-tests/link) to see how to format your tests. You will have to write a `iai-variants.ts` file which maps the props to the expected classes

New components which are not in GOV.UK

- Matches i.AI expected HTML

  These are to check that the html rendered in each framework match the expected html structure

  You will need to write an expected.html file and then assert that each component matches that output. You can see the example of the [Toggle test folder](/tests/src/component-tests/toggle/) to see how to structure your tests

### Technical requirements

- Progressive enhancements
  Your component should follow the progressive enhancement priniple of GOV.UK
- SCSS mixins - should use the govuk mixins where possible
- Variant classes should follow BEM structure e.g.`iai-card--secondary` or `govuk-button--tertiary` where extending a GOV.UK component
- Output - Components should all be broken down to behave in a way that children can be passed in a intuitive way. E.g. the table component should be consumed like the following:

  ```
      <Table>
          <TableCaption size="medium">Monthly energy costs</TableCaption>
          <TableHead>
              <TableRow>
                  <TableHeader>Month</TableHeader>
                  <TableHeader numeric>Gas</TableHeader>
                  <TableHeader numeric>Electricity</TableHeader>
              </TableRow>
          </TableHead>
          <TableBody>
              <TableRow>
                  <TableCell>January</TableCell>
                  <TableCell numeric>£85</TableCell>
                  <TableCell numeric>£95</TableCell>
              </TableRow>
              <TableRow>
                  <TableCell>February</TableCell>
                  <TableCell numeric>£75</TableCell>
                  <TableCell numeric>£55</TableCell>
              </TableRow>
              <TableRow>
                  <TableCell>March</TableCell>
                  <TableCell numeric>£165</TableCell>
                  <TableCell numeric>£125</TableCell>
              </TableRow>
          </TableBody>
      </Table>
  ```

## Releases

If you up the version number in the package.json of any package it will be released on a merge to main