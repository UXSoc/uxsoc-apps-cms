import React from "react"
import Position from "../Position"
import Card from "../Card"
import {
  Container,
  Header,
  SecondaryHeader,
  PositionWrapper,
  CardTitle,
  HeaderContainer,
} from "./styles"
import "./style.css"
import ReactHtmlParser from 'react-html-parser'; 

// const events = [
//   {
//     title: `Project Manager (Flagship Project)`,
//   },
//   {
//     title: `Programs Head (Flagship Project)`,
//   },
//   {
//     title: `Logistics (Flagship Project)`,
//   },
//   {
//     title: `Externals Head (Flagship Project)`,
//   },
//   {
//     title: `Project Manager (Minor Project)`,
//   },
//   {
//     title: `Logistics (Minor Project)`,
//   },
//   {
//     title: `Programs Head (Minor Project)`,
//   },
// ]

// const marketing = [
//   {
//     title: `Internal Branding Officer`,
//   },
//   {
//     title: `External Branding Officer`,
//   },
//   {
//     title: `Content Officer`,
//   },
//   {
//     title: `Community Engagement Officer`,
//   },
//   {
//     title: `Photo Editors`,
//   },
//   {
//     title: `Video Editor`,
//   },
// ]

const Department = ({
  department,
  defaultColor,
  secondaryColor,
  footerColor,
  primaryColor,
}) => (
  <div className="dept-panel">
    {/* {console.log(events.length)} */}
    <Container default={defaultColor}>
      <HeaderContainer>
        <div class="dept-info">
          <Header footer={footerColor}>{department.title}</Header>
          <p>{department.description}</p>
        </div>
        {/* <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FUXSoc%2Fvideos%2F447179010407211%2F&show_text=false&width=560&t=0" width="560" height="314" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true" onload="this.style.height=(this.contentWindow.document.body.scrollHeight+20)+'px';"></iframe> */}
        {ReactHtmlParser(department.video)}
      </HeaderContainer>
      {/* <div className="department-secondary-container">
        <SecondaryHeader footer={footerColor} secondary={secondaryColor}>{department.type}</SecondaryHeader>
      </div> */}
      <PositionWrapper>
        {department.positions === null || department.positions === undefined
          ? null
          : department.positions.map((position, index) => (
              <Position
                title={position.title}
                description={position.description}
                key={index}
                primary={primaryColor}
                footer={footerColor}
              />
            ))}
      </PositionWrapper>

      {/* <CardTitle primary={primaryColor}>
        {department.cardSectionTitle}
      </CardTitle> */}
      {/* {department.title.includes("Events") ? (
        <div>
          <Card title={events[0].title} footer={footerColor}>
            <p>
              Oversee all of the members’ tasks and make sure each one is on
              track with all their responsibilities <br />
            </p>
            <ul>
              <li>
                To set deadlines for each role and ensure that it is followed
              </li>
              <li>
                Will work closely with the AVP and give weekly updates on the
                members and event progress{" "}
              </li>
              <li>
                All around work -- help members when they need something,
                communicate with other departments
              </li>
            </ul>
          </Card>
          <Card title={events[1].title} footer={footerColor}>
            <ul>
              <li>
                In-charge of ideation and content creation with regards to
                program planning and flow
              </li>
              <li>
                To create programs and activities that are best suited for an
                online platform (as of now)
              </li>
              <li>
                Must be a creative thinker that can implement fresh and new
                ideas for the programs for each event
              </li>
              <li>Create spiels of the hosts</li>
              <li>
                Must be flexible and can easily revise any program changes
              </li>
            </ul>
          </Card>
          <Card title={events[2].title} footer={footerColor}>
            <ul>
              <li>
                In Charge of Handling the Online Platform Needed to Hold the
                Workshop (ex. Zoom)
                <ul>
                  <li>
                    Prepare Other Materials Needed For the Workshop (ex. Videos
                    or powerpoints needed by other Departments for You To
                    Present, Music While waiting for more participants)
                  </li>
                  <li>
                    Must be prepared for potential risks (ex. Zoom link not
                    working or zoom is lagging and you have to switch platforms)
                  </li>
                  <li>
                    In charge of Creating Sign-ups and post evals for these
                    Workshops and keeping track of registrations
                  </li>
                </ul>
              </li>
            </ul>
          </Card>
          <Card title={events[3].title} footer={footerColor}>
            <ul>
              <li>
                In-charge of looking for speakers and hosts for the events
              </li>
              <li>
                Create e-mail templates/letters to be sent out to potential
                clients
              </li>
              <li>
                Is the communication bridge between the client and the
                organization
              </li>
              <li>Create write ups about the speakers</li>
            </ul>
          </Card>
          <Card title={events[4].title} footer={footerColor}>
            <ul>
              <li>
                In charge of facilitating the tasks needed to be accomplished to
                Programs and Logistics Officers.
                <ul>
                  <li>
                    Includes Creating A Schedule For Meetings in both Event
                    Planning and Post Event Processing
                  </li>
                  <li>Includes Setting A Deadline For these Tasks</li>
                  <li>Include Monitoring and Documenting Project Progress</li>
                </ul>
              </li>
              <li>
                In charge of Communicating with other departments on what they
                need
                <ul>
                  <li>Includes Creating Meetings For these Departments</li>
                </ul>
              </li>
              <li>In charge of Preparing for Potential Risks</li>
              <li>
                All around work -- help members when they need something,
                communicate with other departments
              </li>
            </ul>
          </Card>
          <Card title={events[5].title} footer={footerColor}>
            <ul>
              <li>
                In Charge of Handling the Online Platform Needed to Hold the
                Workshop (ex. Zoom)
                <ul>
                  <li>
                    Prepare Other Materials Needed For the Workshop (ex. Videos
                    or powerpoints needed by other Departments for You To
                    Present, Music While waiting for more participants)
                  </li>
                  <li>
                    Must be prepared for potential risks (ex. Zoom link not
                    working or zoom is lagging and you have to switch platforms)
                  </li>
                  <li>
                    In charge of Creating Sign-ups and post evals for these
                    Workshops and keeping track of registrations
                  </li>
                </ul>
              </li>
            </ul>
          </Card>
          <Card title={events[6].title} footer={footerColor}>
            <ul>
              <li>In charge of handling the Program Flow of each Workshop</li>
              <li>In charge of Creating Icebreakers</li>
              <li>
                Help In Creating the Module and Suggesting Content For These
                Workshops
              </li>
              <li>Must be In Contact with Marketing for Spiels</li>
              <li>
                In charge of sending emails for possible speakers (if there are
                any)
              </li>
              <li>
                In Charge of Monitoring the chat and handling the Q&A (ex
                .Creating a Poll for most voted questions)
              </li>
            </ul>
          </Card> */}
          {/* <Card title={events[7].title} footer={footerColor}>
            <ul>
              <li>
                In-charge of looking for speakers and hosts for the events
              </li>
              <li>
                Create e-mail templates/letters to be sent out to potential
                clients
              </li>
              <li>
                Is the communication bridge between the client and the
                organization
              </li>
              <li>Create write ups about the speakers</li>
            </ul>
          </Card> */}
        {/* </div>
      ) : null} */}
      {/* {department.title.includes("Marketing") ? (
        <div>
          <Card title={marketing[0].title} footer={footerColor}>
            <strong>Role</strong>
            <ul>
              <li>
                The Internal Branding Officer will work under the Branding AVP,
                and assist in the ideation and design creation of publication
                materials involved for events and departmental initiatives.
              </li>
            </ul>
            <strong>Responsibilities</strong>
            <ul>
              <li>
                Conceptualizes and executes publication materials for assigned
                marketing events
              </li>
              <li>Assists in overseeing departmental or office initiatives</li>
              <li> will propose 1-2 internal initiatives for the department</li>
              <li>
                must have experience using creative software (either Photoshop,
                Illustrator, Figma) <em>means adjustable</em>
              </li>
            </ul>
          </Card>
          <Card title={marketing[1].title} footer={footerColor}>
            <strong>Role</strong>
            <ul>
              <li>
                The External Branding Officer will work under the Branding AVP,
                and assist in the branding collaterals and efforts assigned for
                the different clients of UX Society.
              </li>
            </ul>
            <strong>Responsibilities</strong>
            <ul>
              <li>
                Gain experience by working on branding deliverables for UXSoc
                clients
              </li>
              <li>
                Coordinate with other departments for requirements if necessary
              </li>
              <li>Will propose 1-2 external initiatives for the department</li>
              <li>
                must have experience using creative software (either Photoshop,
                Illustrator, Figma) <em>means adjustable</em>
              </li>
            </ul>
          </Card>
          <Card title={marketing[2].title} footer={footerColor}>
            <strong>Role</strong>
            <ul>
              <li>
                The Content Writer will compose content for the organization's
                online presence, craft marketing copies, and edit before
                publication.
              </li>
            </ul>
            <strong>Responsibilities</strong>
            <ul>
              <li>
                Produce relevant content for official social media platforms
              </li>
              <li>Research UX-related trends, updates, news</li>
              <li>Will propose 1-2 external initiatives for the department</li>
              <li>Spearhead ideation sessions</li>
            </ul>
          </Card>
          <Card title={marketing[3].title} footer={footerColor}>
            <strong>Role</strong>
            <ul>
              <li>
                The Community Engagement Officer is in charge of driving member
                engagement through social media efforts, and ensures all content
                is grounded in UXSociety's human-centric advocacy.
              </li>
            </ul>
            <strong>Responsibilities</strong>
            <ul>
              <li>Keeps the official pages and groups up to date</li>
              <li>Establishes and maintains member relationships</li>
              <li>Will propose 1-2 external initiatives for the department</li>
              <li>Leads OKR (Objectives and Key Results) meetings</li>
            </ul>
          </Card>
          <Card title={marketing[4].title} footer={footerColor}>
            <strong>Role</strong>
            <ul>
              <li>
                The Photo Editor ensures proper documentation and representation
                of UX Society by enhancing photos taken from a UX Soc event to
                further promote its projects and initiatives.
              </li>
            </ul>
            <strong>Responsibilities</strong>
            <ul>
              <li>Enhances photos for branding purposes of a UX event</li>
              <li>
                Ensure to present photos appropriate and appealing to viewers on
                social media
              </li>
              <li>
                Knows basic photo-editing skills and softwares like Adobe
                Photoshop, and Adobe Lightroom
              </li>
            </ul>
          </Card>
          <Card title={marketing[5].title} footer={footerColor}>
            <strong>Role</strong>
            <ul>
              <li>
                The Video Editor ensures proper documentation and representation
                of UX Society by enhancing videos taken from a UX Soc event to
                further promote its projects and initiatives.
              </li>
            </ul>
            <strong>Responsibilities</strong>
            <ul>
              <li>Enhances videos for branding purposes of a UX event</li>
              <li>
                Ensure to present videos appropriate and appealing to viewers on
                social media
              </li>
              <li>Help create video lectures from other UX departments</li>
              <li>Has experience in creating quality videos</li>
            </ul>
          </Card>
        </div>
      ) : null} */}
      {/* <div className="department-info-container">
        {department.cards === null || department.cards === undefined
          ? null
          : department.cards.map((card, index) => (
              <Card
                title={card.title}
                description={card.description}
                key={index}
                footer={footerColor}
              />
            ))}
      </div> */}
    </Container>
  </div>
)

export default Department
