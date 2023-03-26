#![allow(dead_code, unused_variables)]
use std::process::Command;

#[tauri::command]
pub fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
pub fn execute_node_app(file_path: &str) -> String {
    let output = Command::new("node")
        .arg(file_path)
        .arg("&& disown")
        .output()
        .expect("failed to execute process");

    return format!("Hey, {}", String::from_utf8(output.stdout).unwrap());
}
