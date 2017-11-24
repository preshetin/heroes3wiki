import React, { Component } from 'react';

class FilterBar extends Component {

  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    return (
      <nav class="panel">
        <div class="panel-block">
          <p class="control has-icons-left">
            <input type="text" class="input" placeholder="search" value={this.props.filterText} onChange={this.handleFilterTextChange} />
            <span class="icon is-small is-left">
              <i class="fa fa-search"></i>
            </span>
          </p>
        </div>
        <div class="panel-block">
          <div class="field">
            <p class="control">
              <div class="b-checkbox is-warning">
                <input id="checkbox" class="styled" type="checkbox" />
                <label for="checkbox">
                    Minor
                </label>
              </div>
              <div class="b-checkbox is-warning">
                <input id="checkbox" class="styled" type="checkbox" />
                <label for="checkbox">
                    Major
                </label>
              </div>
              <div class="b-checkbox is-warning">
                <input id="checkbox" class="styled" type="checkbox" />
                <label for="checkbox">
                    Teasure
                </label>
              </div>
              <div class="b-checkbox is-warning">
                <input id="checkbox" class="styled" type="checkbox" />
                <label for="checkbox">
                    Combo
                </label>
              </div>
            </p>
          </div>
        </div>
        <div class="panel-block">
          <div class="field">
            <p class="control">
              <div class="b-checkbox is-warning">
                <input id="checkbox" class="styled" type="checkbox" />
                <label for="checkbox">
                    Cape
                </label>
              </div>
              <div class="b-checkbox is-warning">
                <input id="checkbox" class="styled" type="checkbox" />
                <label for="checkbox">
                    Feet
                </label>
              </div>
              <div class="b-checkbox is-warning">
                <input id="checkbox" class="styled" type="checkbox" />
                <label for="checkbox">
                    Helm
                </label>
              </div>
              <div class="b-checkbox is-warning">
                <input id="checkbox" class="styled" type="checkbox" />
                <label for="checkbox">
                    Left Hand
                </label>
              </div>
              <div class="b-checkbox is-warning">
                <input id="checkbox" class="styled" type="checkbox" />
                <label for="checkbox">
                    Miscellaneous
                </label>
              </div>
              <div class="b-checkbox is-warning">
                <input id="checkbox" class="styled" type="checkbox" />
                <label for="checkbox">
                    Necklace
                </label>
              </div>
              <div class="b-checkbox is-warning">
                <input id="checkbox" class="styled" type="checkbox" />
                <label for="checkbox">
                    Right Hand
                </label>
              </div>
              <div class="b-checkbox is-warning">
                <input id="checkbox" class="styled" type="checkbox" />
                <label for="checkbox">
                    Ring
                </label>
              </div>
              <div class="b-checkbox is-warning">
                <input id="checkbox" class="styled" type="checkbox" />
                <label for="checkbox">
                    Torso
                </label>
              </div>
              <div class="b-checkbox is-warning">
                <input id="checkbox" class="styled" type="checkbox" />
                <label for="checkbox">
                    Torso(9 slots)
                </label>
              </div>
            </p>
          </div>
        </div>
      </nav>
    );
  }
}

export default FilterBar;
