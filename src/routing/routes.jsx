import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LearnBootsrap from "../design/learnbootstrap";
import LearnPrint from "../design/print";
import SearchFunctionality from "../search/index";
import TodoList from "../design/todo";
import CopyModule from "../copyTask";
import CopyRange from "../copyRange";
import MultiFiles from "../multiFiles";
import DragandDrop from "../draganddrop";
import DragDrop from "../fileDragAndDrop";
import { ValidationSchemaExample } from "../FileValidation";
import Selectinputs from "../TypesOfInputs/inputFile";
import SelectFiles from "../selectFile";
import DesignPage from "../designPage";
import PageDesign from "../pageDesign";
import ToggleDetails from "../toggle";
import patients from "../toggle/patients";
import providers from "../toggle/providers";

const LearnRoutes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LearnBootsrap} />
          <Route exact path="/print" component={LearnPrint} />
          <Route exact path="/index" component={SearchFunctionality} />
          <Route exact path="/todo" component={TodoList} />
          <Route exact path="/copyTask" component={CopyModule} />
          <Route exact path="/copyRange" component={CopyRange} />
          <Route exact path="/multiFiles" component={MultiFiles} />
          <Route exact path="/draganddrop" component={DragandDrop} />
          <Route exact path="/fileDragAndDrop" component={DragDrop} />
          <Route exact path="/selectFile" component={SelectFiles} />
          <Route exact path="/designPage" component={DesignPage} />
          <Route exact path="/pageDesign" component={PageDesign} />
          <Route exact path="/toggle" component={ToggleDetails} />
          <Route exact path="/toggle:any" component={ToggleDetails} />
          {/* <Route exact path="/toggle/patients" component={patients} />
          <Route exact path="/toggle/providers" component={providers} /> */}
          <Route
            exact
            path="/FileValidation"
            component={ValidationSchemaExample}
          />
          <Route exact path="/inputFile" component={Selectinputs} />
        </Switch>
      </Router>
    </div>
  );
};
export default LearnRoutes;
