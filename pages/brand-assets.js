import styled from 'styled-components'

import Br from 'components/Br'
import Callout from 'components/Callout'
import Link from 'components/Link'
import Page, { page } from 'components/Page'

const logoLightSvg = require('../assets/images/brand-assets/buildkite-logo-on-light.svg')
const logoLightPng = require('../assets/images/brand-assets/buildkite-logo-on-light.png')
const logoDarkSvg = require('../assets/images/brand-assets/buildkite-logo-on-dark.svg')
const logoDarkPng = require('../assets/images/brand-assets/buildkite-logo-on-dark.png')

const logoPortraitLightSvg = require('../assets/images/brand-assets/buildkite-logo-portrait-on-light.svg')
const logoPortraitLightPng = require('../assets/images/brand-assets/buildkite-logo-portrait-on-light.png')
const logoPortraitDarkSvg = require('../assets/images/brand-assets/buildkite-logo-portrait-on-dark.svg')
const logoPortraitDarkPng = require('../assets/images/brand-assets/buildkite-logo-portrait-on-dark.png')

const markLightSvg = require('../assets/images/brand-assets/buildkite-mark-on-light.svg')
const markLightPng = require('../assets/images/brand-assets/buildkite-mark-on-light.png')
const markDarkSvg = require('../assets/images/brand-assets/buildkite-mark-on-dark.svg')
const markDarkPng = require('../assets/images/brand-assets/buildkite-mark-on-dark.png')

const wordmarkLightSvg = require('../assets/images/brand-assets/buildkite-wordmark-on-light.svg')
const wordmarkLightPng = require('../assets/images/brand-assets/buildkite-wordmark-on-light.png')
const wordmarkDarkSvg = require('../assets/images/brand-assets/buildkite-wordmark-on-dark.svg')
const wordmarkDarkPng = require('../assets/images/brand-assets/buildkite-wordmark-on-dark.png')

const Section = styled.section`
  margin-top: ${({ theme }) => theme.outerSpacing.s3};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s3};
`

const MaxWidthSection = Section.extend`
  @media (min-width: 742px) {
    ${({ theme }) => theme.maxWidthContainer}
    width: 60%;
  }
`

const SectionHeader = styled.h2`
  ${({ theme }) => theme.textStyles.secondLevelHeading}
  margin: ${({ theme }) => theme.textSpacing.s1} 0;
`

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.text.subdued};
  margin: ${({ theme }) => theme.textSpacing.s2} 0;
`

const AssetListContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgrounds.grey};
  padding: ${({ theme }) => theme.innerSpacing.s2};
`

const AssetList = ({ children }) => (
  <AssetListContainer>
    <div>
      {children}
    </div>
  </AssetListContainer>
)

const AssetImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.darkBackground ? 'black' : 'white' };
  img { max-width: 100%; }
`

const Asset = ({ description, image, formats, darkBackground }) => (
  <div>
    <AssetImageContainer darkBackground={darkBackground}>
      <img src={image} alt={description} />
    </AssetImageContainer>
    <p>{description}</p>
    <ul>
      {Object.keys(formats).map(extension =>
        <li key={extension}>
          <Link external href={formats[extension]}>
            <a>{extension.toUpperCase()}</a>
          </Link>
        </li>
      )}
    </ul>
  </div>
)

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Logo & Brand Assets"
    title="Brand Assets"
    description={<span>Official versions of the Buildkite logo,<Br maxWidth='30em'/> marks, screenshots and words.</span>}
    loggedIn={loggedIn}
  >
    <MaxWidthSection>
      <SectionHeader>Guidelines and Rules</SectionHeader>
      <Paragraph>
        Our logo and mark are trademarks, and we need to protect them. If you’d like to use our logo or mark anywhere, we’ve provided files here for you. Please don’t alter the files in any way—we’ve put a lot of love into them and appreciate everyone using them only in the ways we’ve covered on this page.
      </Paragraph>
    </MaxWidthSection>

    <Section>
      <SectionHeader>Main Logo</SectionHeader>
      <Paragraph>
        If you’re putting a Buildkite logo anywhere, this is one we like to see.<br />
        It’s the official one, and the one we love the most.
      </Paragraph>

      <AssetList>
        <Asset
          description="Landscape version for light backgrounds"
          image={logoLightSvg}
          formats={{ svg: logoLightSvg, png: logoLightPng }}
        />
        <Asset
          description="Landscape version for dark backgrounds"
          image={logoDarkSvg}
          darkBackground={true}
          formats={{ svg: logoDarkSvg, png: logoDarkPng }}
        />
        <Asset
          description="Portrait version for light backgrounds"
          image={logoPortraitLightSvg}
          formats={{ svg: logoPortraitLightSvg, png: logoPortraitLightPng }}
        />
        <Asset
          description="Portrait version for dark backgrounds"
          image={logoPortraitDarkSvg}
          darkBackground={true}
          formats={{ svg: logoPortraitDarkSvg, png: logoPortraitDarkPng }}
        />
      </AssetList>
    </Section>

    <Section>
      <SectionHeader>Secondary Logos and Marks</SectionHeader>
      <Paragraph>Our secondary logos can be used for making emoji, an icon, or if you need to include a small version of our mark somewhere.</Paragraph>
      <AssetList>
        <Asset
          description="Mark for light or transparent backgrounds"
          image={markLightSvg}
          formats={{ svg: markLightSvg, png: markLightPng }}
        />
        <Asset
          description="Mark for dark backgrounds"
          image={markDarkSvg}
          darkBackground={true}
          formats={{ svg: markDarkSvg, png: markDarkPng }}
        />
        <Asset
          description="Wordmark for light or transparent backgrounds"
          image={wordmarkLightSvg}
          formats={{ svg: wordmarkLightSvg, png: wordmarkLightPng }}
        />
        <Asset
          description="Wordmark for dark backgrounds"
          image={wordmarkDarkSvg}
          darkBackground={true}
          formats={{ svg: wordmarkDarkSvg, png: wordmarkDarkPng }}
        />
      </AssetList>
    </Section>

    {/* <Section>
      <SectionHeader>Screenshots</SectionHeader>
      <Paragraph>If you need screenshots of Buildkite to use anywhere, we’d rather you use ours than taking your own. If you need different pages, get in touch and we can add more.</Paragraph>
      <AssetList>
        <Asset
          description="Build Pipelines Overview"
          image={screenshotJpg}
          formats={{ jpg: screenshotJpg }}
        />
        <Asset
          description="Unlocking a Build Pipeline"
          image={screenshotJpg}
          formats={{ jpg: screenshotJpg }}
        />
        <Asset
          description="Managing Your Build Agents"
          image={screenshotJpg}
          formats={{ jpg: screenshotJpg }}
        />
        <Asset
          description="Starting a Build Agent"
          image={screenshotJpg}
          formats={{ jpg: screenshotJpg }}
        />
      </AssetList>
    </Section> */}

    {/* <Section>
      <SectionHeader>Production description</SectionHeader>
      <Paragraph>If you need a description of Buildkite that will appear in text, you can use the following paragraph to explain who we are and what we do:</Paragraph>
      <blockquote>
        <p>This is an excellent description of what Buildkite does, who it’s for, and what makes it special. Lorem ipsum ipsum ipsum ipsum ipsum ipusm ipsum.</p>
      </blockquote>
    </Section> */}

    <Callout
      heading="Need something else?"
      description={<span>Get in touch with our design team,<Br maxWidth='30em'/> and we can help you out.</span>}
      buttonTitle="Email design@buildkite.com"
      url="mailto:design@buildkite.com"
    />
  </Page>
))