'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

exports.default = function (Drop) {
  var DocumentedDrop = (0, _reactDesc.describe)(Drop).availableAt((0, _utils.getAvailableAtBadge)('Drop')).description('A drop container that opens next to a target.').usage('import { Drop } from \'grommet\';\n<Drop target={reference}>...</Drop>');

  DocumentedDrop.propTypes = {
    align: _reactDesc.PropTypes.shape({
      top: _reactDesc.PropTypes.oneOf(['top', 'bottom']),
      bottom: _reactDesc.PropTypes.oneOf(['top', 'bottom']),
      right: _reactDesc.PropTypes.oneOf(['left', 'right']),
      left: _reactDesc.PropTypes.oneOf(['left', 'right'])
    }).description('How to align the drop with respect to the target element.').defaultValue({
      top: 'top',
      left: 'left'
    }),
    onClickOutside: _reactDesc.PropTypes.func.description('Function that will be invoked when the user clicks outside the drop.'),
    onEsc: _reactDesc.PropTypes.func.description('Function that will be called when the user presses the escape key inside the drop.'),
    responsive: _reactDesc.PropTypes.bool.description('Whether to dynamically re-place when resized.').defaultValue(true),
    restrictFocus: _reactDesc.PropTypes.bool.description('Whether the drop should control focus.'),
    target: _reactDesc.PropTypes.object.description('Target where the drop will be aligned to. This should be a React reference.').isRequired,
    theme: _reactDesc.PropTypes.object.description('Custom styles for Drop component.')
  };

  return DocumentedDrop;
};