<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
 <img alt="UXSocAppsLogo" src="https://github.com/UXSoc/uxsoc-apps-cms/blob/master/src/assets/images/logo.png?raw=true" width="60" />
</p>
<h1 align="center">
  UX Society Applications
</h1>

User Experience Society is a student-run organization that advocates and practices human-centered design. We combine this with a growth mindset, to create a strong mentorship culture that raises design leaders who are capable of creating positive change in the community.

This page helps educate potential applicants on the vision, mission, and core values of UX Society as well as give details about the roles and responsibilities of different deparments and member positions of the organization. 

## 🚀 Quick start

1. **Install 'yarn' & 'gatsby'**

    Before you start, make sure you have npm installed. Using the commands below, install yarn and gatsby

    ```sh
    npm install --global yarn
    npm install -g gatsby-cli
    ```
    
2.  **Install Project Dependencies**

    Don't forget to install the following dependencies using yarn with the following commands below.

    ```sh
    yarn install
    ```

3.  **Start developing.**

    Start the dev environment of the project by using this command

    ```sh
    yarn start:app
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    \_Note: You'll also see a third link: `http://localhost:8000/admin`\_. This gives you access to the headless content management system we are using for the project which is Netlify CMS. Learn more about using this cms in the [Netlify CMS Docs](https://www.netlifycms.org/docs/intro/) and here's the complete list of widgets that can be used [Netlify CMS Widget](https://www.netlifycms.org/docs/widgets/)

## 📁 File Structure

The file structure is already setup for you (well not all but mostly). Please do take note of the following rules in our file structure

```
src
└─ assets
    └── css // put global stylesheets here
    └── images // put uneditable images and icon here
└─ cms
    └── preview templates // used to have preview templates in cms
└─ components // global components
└─ lambda // used for netlify identity
└─ pages // markdown and javascript pages will be placed here
└─ templates // page skeleton
```

- **Note in the templates** The components folder inside each template is for the purpose of dividing the page into component sections. Thus, remember to divide the whole page into section components and call it only in the index.js. If you have questions regarding this, ask your project manager or your co-developers

```
static
└─ admin // where the content management system is entirely managed
└─ uploads // where assets are uploaded by users of the cms
```

## 📔 Learning Netlify CMS with Gatsby

Start from [this point](https://www.gatsbyjs.org/docs/sourcing-from-netlify-cms/#authenticating-with-github) in the Gatsby documentation to finish the set up for your personal Netlify CMS with authentication.

<!-- AUTO-GENERATED-CONTENT:END -->
