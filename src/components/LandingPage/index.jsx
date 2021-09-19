import React from "react";
import { Link } from 'react-router-dom';
import "./styles.css";

const LandingPage = (props) => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <form>
            <div class="form-row">
              <div class="form-fields">
                <label>Sept</label>
              </div>
              <div class="form-fields">
                <input type="text" class="form-fieldss" />
              </div>
            </div>
            <div class="form-row">
              <Link to={`/add-record`} className="btn btn-add" onClick={()=>{}} >
                {"Add +"}
              </Link>
            </div>
            <div class="table-responsive">
              <table>
                <tr>
                  <th>Date</th>
                  <th>Desc</th>
                  <th>Cat</th>
                  <th>Amount $</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>5</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>5</td>
                </tr>
              </table>
            </div>
          </form>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  );
};

export default LandingPage;
