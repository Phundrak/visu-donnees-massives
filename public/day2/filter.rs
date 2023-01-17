use std::error::Error;
use std::fs;

fn main() -> Result<(), Box<dyn Error>> {
    let stop_words: Vec<String> = fs::read_to_string("stop_words.txt")?
        .split('\n')
        .map(std::string::ToString::to_string)
        .collect();
    let text = fs::read_to_string("text.txt")?
        .split(|c| !char::is_alphabetic(c))
        .into_iter()
        .filter_map(|w| {
            let word = String::from(w.to_lowercase());
            if word.len() < 3 || stop_words.contains(&word) {
                None
            } else {
                Some(word)
            }
        })
        .collect::<Vec<String>>();
    fs::write("output.txt", text.join(" "))?;
    Ok(())
}
