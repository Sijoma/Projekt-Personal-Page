import { css } from '@emotion/core';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import { bpMaxSM } from '../../lib/breakpoints';
import { rhythm } from '../../lib/typography';
import { PleaseConfirmIllustration } from '../ConfirmMessage/Illustrations';
import Message from '../ConfirmMessage/Message';
import { withTheme } from '../Theming';

const FORM_ID = process.env.CONVERTKIT_SIGNUP_FORM

const SubscribeSchema = Yup.object().shape({
  email_address: Yup.string()
    .email('Falsche E-Mail Adresse')
    .required('Benötigt.'),
  first_name: Yup.string(),
})

const PostSubmissionMessage = ({ response }) => {
  return (
    <div>
      <Message
        illustration={PleaseConfirmIllustration}
        title={`Cool, noch eine Sache...`}
        body={`Wir haben dir eine E-Mail mit einem Bestätigungslink geschickt. 
          **Bitte überprüfen Sie ihren E-Mail Eingang!**`}
      />
    </div>
  )
}

class SignUp extends React.Component {
  state = {
    submitted: false,
  }

  async handleSubmit(values) {
    this.setState({ submitted: true })
    try {
      const response = await fetch(
        `https://app.convertkit.com/forms/${FORM_ID}/subscriptions`,
        {
          method: 'post',
          body: JSON.stringify(values, null, 2),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      )

      const responseJson = await response.json()

      this.setState({
        submitted: true,
        response: responseJson,
        errorMessage: null,
      })
    } catch (error) {
      this.setState({
        submitted: false,
        errorMessage: 'Something went wrong.',
      })
    }
  }

  render() {
    const { submitted, response, errorMessage } = this.state
    const { theme } = this.props
    const successful = response && response.status === 'success'

    return (
      <div>
        {!successful && (
          <h2
            css={css`
              margin-bottom: ${rhythm(1)};
              margin-top: 0;
            `}
          >
            Subscribe.
          </h2>
        )}

        <Formik
          initialValues={{
            email_address: '',
            first_name: '',
          }}
          validationSchema={SubscribeSchema}
          onSubmit={values => this.handleSubmit(values)}
          render={({ errors, touched, isSubmitting }) => (
            <>
              {!successful && (
                <Form
                  css={css`
                    display: flex;
                    align-items: flex-end;
                    button {
                      margin-left: 10px;
                    }
                    .field-error {
                      display: block;
                      color: ${theme.colors.red};
                      font-size: 80%;
                    }
                    input,
                    label {
                      width: 100%;
                    }
                    ${bpMaxSM} {
                      flex-direction: column;
                      align-items: flex-start;
                      width: auto;
                      label,
                      input {
                        margin: 5px 0 0 0 !important;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                      }
                      button {
                        margin: 20px 0 0 0;
                      }
                    }
                  `}
                >
                  <label htmlFor="name">
                    <div
                      css={css`
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-end;
                      `}
                    >
                      Name
                      <ErrorMessage
                        name="name"
                        component="span"
                        className="field-error"
                      />
                    </div>
                    <Field
                      aria-label="Name"
                      aria-required="false"
                      name="name"
                      placeholder="Max"
                      type="text"
                    />
                  </label>
                  <label
                    htmlFor="email"
                    css={css`
                      margin-left: 10px;
                    `}
                  >
                    <div
                      css={css`
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-end;
                      `}
                    >
                      E-Mail
                      <ErrorMessage
                        name="email_address"
                        component="span"
                        className="field-error"
                      />
                    </div>
                    <Field
                      aria-label="your email address"
                      aria-required="true"
                      name="email_address"
                      placeholder="max@mustermann.de"
                      type="email"
                    />
                  </label>
                  <button
                    data-element="submit"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {!isSubmitting && 'Submit'}
                    {isSubmitting && 'Submitting...'}
                  </button>
                </Form>
              )}
              {submitted &&
                !isSubmitting && <PostSubmissionMessage response={response} />}
              {errorMessage && <div>{errorMessage}</div>}
            </>
          )}
        />
      </div>
    )
  }
}

export default withTheme(SignUp)
