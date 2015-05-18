/**
 * Минималистическая шаблонная система.
 * @param {string} str строка для замены.
 * @param {Object} dependence зависимость, что на что меняется.
 * @param {string} left_separator левый разделитель.
 * @param {string} right_separator правый разделитель.
 * @return {string} Обработанную строку.
 */
template = function(str, dependence, left_separator, right_separator){
    // Если ничего не передать, то вернет пустую строку
    if(!str) return '';
    // Если не передали массив с зависимостями то ничего заменяться не будет
    //@TODO возможно выходить надо тут тоже как и в случае с пустой строкой
    var dependence = (dependence||[]),
    // Разделитель с левой стороны        
        left_separator = (left_separator||'%%'),
    // Разделитель с правой стороны
        right_separator = (right_separator||'%%');
        
    return str.replace(new RegExp(left_separator+"(.*?)"+right_separator,"ig"),function(def, key){
        // Если зависимость не найдена то ничего не меняем
        return dependence[key] ? dependence[key] : def
    });
}


// Without comments
template = function(str, dependence, left_separator, right_separator){if(!str) return ''; var dependence = (dependence||[]), left_separator = (left_separator||'%%'), right_separator = (right_separator||'%%'); return str.replace(new RegExp(left_separator+"(.*?)"+right_separator,"ig"),function(){return dependence[arguments[1]] ? dependence[arguments[1]] : arguments[0] }); }
