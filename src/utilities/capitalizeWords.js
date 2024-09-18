function capitalizeWords(str) {
    return str
      .split(' ') // Split the string into words
      .map(word => 
        word.toLowerCase() === 'and' 
          ? word.toLowerCase() // Keep "and" lowercase
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize other words
      )
      .join(' '); // Join the words back into a string
  }

export default  capitalizeWords;
