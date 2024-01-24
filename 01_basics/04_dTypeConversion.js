let x = "33"                                          // "33" => 33
console.log(typeof (x))                               // "33abc" => NaN (not a number)
                                                      // null => 0
// string convert into number.                        // boolean true => 1
                                                      //         falue => 0
let intoNumber = Number(x)                            // undefined => NaN (not a number)
console.log(typeof (intoNumber))                   

// conver into boolean                                // "avadh" => true
                                                      // 1 => true
let intoBoolean = Boolean(x)                          // 0 => false
console.log(intoBoolean)                              // null => false