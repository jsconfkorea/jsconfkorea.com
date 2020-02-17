import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const { allLocalesYaml } = useStaticQuery(graphql`
    query i18nQuery {
      allLocalesYaml {
        nodes {
          translation {
            en
            ko
            look_back_2019
            website
            video
            call_for_proposals
            sponsor
            newsletter
            code_of_conduct
            privacy_policy

            subcribe {
              description
              error_message
              submit
            }

            report {
              title
              description
              label
              placeholder
              submit
              empty_text_message
              error_message
              sucess_message
            }
          }
        }
      }
    }
  `)

  return allLocalesYaml.nodes
}
