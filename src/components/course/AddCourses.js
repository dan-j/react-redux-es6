import React, { PropTypes } from 'react';

class AddCourses extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {title: ''}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course);
  }

  render() {
    return (
      <div>
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}/>
        <input
          type="submit"
          value="save"
          onClick={this.onClickSave}/>
      </div>
    );
  }
}


AddCourses.propTypes = {
  actions: PropTypes.object.isRequired
};
