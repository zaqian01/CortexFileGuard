#include <iostream>
#include <filesystem>
#include <fstream>
#include <vector>
namespace fs = std::filesystem;

int main() {
    std::string target = "./";
    std::vector<std::string> files;

    for (const auto& entry : fs::recursive_directory_iterator(target)) {
        if (fs::is_regular_file(entry)) {
            files.push_back(entry.path().string());
        }
    }

    std::ofstream out("output.json");
    out << "[\n";
    for (size_t i = 0; i < files.size(); ++i) {
        out << "  \"" << files[i] << "\"";
        if (i != files.size() - 1) out << ",";
        out << "\n";
    }
    out << "]\n";
    out.close();

    std::cout << "Scan selesai. " << files.size() << " file ditemukan.\n";
    return 0;
}
