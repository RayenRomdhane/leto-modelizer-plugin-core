/**
 * Class to add Attribute in Components
 */
class ComponentAttribute {
  /**
   * Default constructor.
   *
   * @param {String} [props.name=null] - The name of the attribute.
   * @param {(String|Boolean|Number|Array|ComponentAttribute[])} [props.value=null] - The value of
   * the attribute.
   * @param {String} [props.type=null] - The type of the attribute.
   */
  constructor(props = {
    name: null,
    value: null,
    type: null,
  }) {
    const { name, value, type } = props;
    /**
     * The name of the attribute.
     * @type {String}
     */
    this.name = name || null;
    /**
     * The value of the attribute.
     * @type {(String|Boolean|Number|Array|ComponentAttribute[])}
     */
    this.value = value || null;
    /**
     * The type of the attribute, reel type of the attribute, to check if it's match with the
     * ComponentAttributeDefinition.
     * @type {String}
     */
    this.type = type || null;
  }
}

export default ComponentAttribute;
