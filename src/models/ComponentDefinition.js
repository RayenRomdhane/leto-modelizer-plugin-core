/**
 * Definition of Component's datas and constraints
 */
class ComponentDefinition {
  /**
   * Default constructor.
   *
   * @param {object} [props={}] - Object that contains all properties to set.
   * @param {string} [props.type] - The type of the associated component.
   * @param {string} [props.icon] - The icon's name of this type of component.
   * @param {string} [props.model] - Name of SVG template to render this type of component.
   * @param {string[]} [props.parentTypes=[]] - The list of types that can be the parent.
   * @param {string[]} [props.childrenTypes=[]] - The list of types that can be the children.
   * @param {ComponentAttributeDefinition[]} [props.definedAttributes=[]] - Defined attributes for
   * this type.
   * @param {boolean} [props.isContainer=false] - Boolean means if this type can be a parent.
   * instantiated components.
   * @param {string} [props.displayType] - Use the given displayType to override
   * the component's rendering. Allowed values: workflow|null
   * @param {boolean} [props.preventChildrenMovement=false] - Prevent user from arbitrarily moving
   * child components.
   * @param {number} [props.childrenPerLine] - Override the line layout
   */
  constructor(props = {
    type: null,
    icon: null,
    model: null,
    parentTypes: [],
    childrenTypes: [],
    definedAttributes: [],
    isContainer: false,
    displayType: null,
    preventChildrenMovement: false,
    childrenPerLine: null,
  }) {
    const {
      type,
      icon,
      model,
      parentTypes,
      childrenTypes,
      definedAttributes,
      isContainer,
      displayType,
      preventChildrenMovement,
      childrenPerLine,
    } = props;

    /**
     * The type of the associated component.
     *
     * @type {string}
     */
    this.type = type || null;
    /**
     * The icon's name of this type of component.
     *
     * @type {string}
     */
    this.icon = icon || null;
    /**
     * Name of SVG model to render this type of component.
     *
     * @type {string}
     */
    this.model = model || null;
    /**
     * The list of types that can be the parent.
     *
     * @type {string[]}
     */
    this.parentTypes = parentTypes || [];
    /**
     * The list of types that can be the children.
     *
     * @type {string[]}
     */
    this.childrenTypes = childrenTypes || [];
    /**
     * Defined attributes for this type.
     *
     * @type {ComponentAttributeDefinition[]}
     */
    this.definedAttributes = definedAttributes || [];
    /**
     * Boolean means if this type can be a parent.
     *
     * @type {boolean}
     */
    this.isContainer = isContainer === undefined ? false : isContainer;
    /**
     * Name of a specific display behavior.
     *
     * @type {string}
     */
    this.displayType = displayType || null;
    /**
     * Flag to always force children layout re-computing.
     *
     * @type {boolean}
     */
    this.preventChildrenMovement = preventChildrenMovement ?? false;
    /**
     * Override the container's children layout line length.
     *
     * @type {number}
     */
    this.childrenPerLine = childrenPerLine ?? null;
  }
}

export default ComponentDefinition;
