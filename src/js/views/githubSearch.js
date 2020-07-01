import React from "react";
import { connect } from "react-redux";
import { fetchUserAndRepos } from "../redux/githubActions";
import UserProfile from "./userProfile";
import Form from "./userSearch";
import UserRepos from "./userRepos";

class If extends React.Component {
  render() {
    let { condition, children } = this.props;
    if (!condition) {
      return null;
    }
    return children;
  }
}

class GitHubSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      userRepos: null,
    };
  }

  getUserRepos = (args) => {
    this.setState({ userData: null, userRepos: null });

    if (localStorage.getItem(args) === null) {
      this.props.dispatch(fetchUserAndRepos(args));
    } else {
      let storage = JSON.parse(localStorage.getItem(args));

      this.setState({
        userData: storage.user_data,
        userRepos: storage.user_repos,
      });
    }
  };

  displayUserData() {
    let userDataError = false;
    let userDataLoading = false;
    let userData = {};

    if (this.state.userData) {
      userData = this.state.userData;
    } else {
      userDataError = this.props.userDataError;
      userDataLoading = this.props.userDataLoading;
      userData = this.props.userData;
    }

    if (userDataError) {
      return <div className="alert">Error! {userDataError.message}</div>;
    } else if (userData && userData.login) {
      return (
        <>
          <If condition={userDataLoading}>
            <div className="spinner"></div>
          </If>

          <UserProfile
            avatar_url={userData.avatar_url}
            login={userData.login}
            email={userData.email}
            url={userData.html_url}
          ></UserProfile>
        </>
      );
    }
  }

  displayUserRepos() {
    let userReposError = false;
    let userReposLoading = false;
    let userRepos = {};

    if (this.state.userRepos) {
      userRepos = this.state.userRepos;
    } else {
      userReposError = this.props.userReposError;
      userReposLoading = this.props.userReposLoading;
      userRepos = this.props.userRepos;
    }

    if (userReposError) {
      return <div className="alert">Error! {userReposError.message}</div>;
    } else if (
      userRepos &&
      Object.keys(userRepos).length != 0 &&
      userRepos.message !== "Not Found"
    ) {
      return (
        <>
          <If condition={userReposLoading}>
            <div className="spinner"></div>
          </If>

          <UserRepos repos={userRepos}></UserRepos>
        </>
      );
    }
  }

  render() {
    return (
      <>
        <div className="header">
          <Form _onSubmit={this.getUserRepos}></Form>
        </div>
        <div className="content">
          <div className="cards">
            <div className="card">{this.displayUserData()}</div>
            <div className="card">{this.displayUserRepos()}</div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  if (
    state.userDataReducer.user_data &&
    state.userDataReducer.user_data.login &&
    state.userReposReducer.user_repos &&
    Object.keys(state.userReposReducer.user_repos).length != 0
  ) {
    let x = {
      user_data: state.userDataReducer.user_data,
      user_repos: state.userReposReducer.user_repos,
    };
    localStorage.setItem(
      state.userDataReducer.user_data.login,
      JSON.stringify(x)
    );
  }
  return {
    userData: state.userDataReducer.user_data,
    userDataLoading: state.userDataReducer.loading,
    userDataError: state.userDataReducer.error,
    userRepos: state.userReposReducer.user_repos,
    userReposLoading: state.userReposReducer.loading,
    userReposError: state.userReposReducer.error,
  };
}

export default connect(mapStateToProps)(GitHubSearch);
