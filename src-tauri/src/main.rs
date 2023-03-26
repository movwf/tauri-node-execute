// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#[cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

fn main() {
    // tauri_app::commander::execute_app();

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            tauri_node_execute::commander::greet,
            tauri_node_execute::commander::execute_node_app
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
