/**
 * Minimal template system.
 * @param {string} template - string for conversion.
 * @param {Object} dependence - list of dependencies to replace.
 * @param {string} left_separator - left separator.
 * @param {string} right_separator right separator.
 * @param {bool} strict - replacement mode (true - don't replace missed dependence, false - replace with empty value) 
 * @return {string} - converted string.
 */
template = function(template, dependence, left_separator, right_separator, strict){
    // Exit if not a string
    if(!template) return '';

    var dependence = (dependence||[]),
        left_separator = (left_separator||'%%'),
        right_separator = (right_separator||'%%');
        
    return template.replace(new RegExp(left_separator+"(.*?)"+right_separator,"ig"), function(def, key){
        // replace by dependence list
        return dependence[key] ? dependence[key] : strict ? def : ''
    });
}

