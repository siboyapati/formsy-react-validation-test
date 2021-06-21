import React, { useRef } from "react"
import { Form } from "formsy-semantic-ui-react"
import { Label } from "semantic-ui-react"
import "semantic-ui/dist/semantic.min.css"



// import "./styles.css"

function App() {
  const errorLabel = <Label color="red" pointing />
  const [err, setErr] = React.useState({});
  const form = useRef(null);

  const onValid = (a, b, c) => {
    debugger;
  }
  const onInvalid = (a, b, c) => {
    debugger;
  }
  // const onInvalid = () => {
  //   debugger;
  // }

  let oneErr = {}

  React.useEffect(() => {
    let t = err;
    console.log(t);
  }, [err])

  const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ];

  const validateForm = (values, b, c) => {
    debugger
  };

  const getEM = (a, b, c) => {
    debugger;
  }
  const onError = (a, b, c) => {
    debugger;
  }

  const showError = (a, b, c) => {
    debugger;
  }

  const onValidSubmit = (a, b, c) => {
    debugger;
  }

  const btnClick = (e) => {
    debugger;
    let t = form.current;
    let y = form.current;
    form.current.formsyForm.submit();
    //this.refs.activityForm.getWrappedInstance().submit();
    // form.current.updateInputsWithError();
    // form.current.formsyForm.runValidation();
  }

  return (
    <div className="ui container">
      <Form ref={form} size="small" onValid={onValid} onInvalid={onInvalid} validationErrors={setErr}
        onError={onError}
        showError={showError}
        onValidSubmit={onValidSubmit}
        // onChange={validateForm}
        getErrorMessages={getEM}>
        <Form.Input
          required
          name="firstName"
          label="First name"
          placeholder="First name"
          validations="isWords"
          errorLabel={<Label color="red" />}
          validationErrors={{
            isWords: 'No numbers or special characters allowed',
            isDefaultRequiredValue: 'First Name is Required',
          }}
        />
        <Form.Input
          name="firstName"
          label="First name"
          placeholder="First name"
          validations="isWords"
          errorLabel={<Label color="red" />}
        />
        <Form.Input
          name="email"
          validations={{
            isEmail: true,
            maxLength: 50,
          }}
          errorLabel={<Label color="red" />}
          validationErrors={{
            isEmail: 'You have to type valid email',
            maxLength: 'You can not type in more than 50 characters',
          }}
        />
        <Form.Input
          name="email"
          label="Email"
          required
          validations="isEmail"
          validationErrors={{ isEmail: 'Email not valid' }}
          errorLabel={errorLabel}
        />
        <Form.Select
          name="gender"
          label="Gender"
          options={options}
          placeholder="Gender"
          required
          errorLabel={<Label color="red" pointing />}
          validationErrors={{
            isDefaultRequiredValue: 'Gender is Required',
          }}
        />

      </Form>
      <button onClick={btnClick}>Click</button>
    </div>
  )
}

export default App;
