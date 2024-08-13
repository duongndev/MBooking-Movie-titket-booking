package com.duongnd.mbookingapp.ui.movie

import android.net.Uri
import android.os.Bundle
import android.widget.MediaController
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.duongnd.mbookingapp.R
import com.duongnd.mbookingapp.databinding.ActivityVideoTrailerBinding

class VideoTrailerActivity : AppCompatActivity() {

    private var _binding: ActivityVideoTrailerBinding? = null
    private val binding get() = _binding!!

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        _binding = ActivityVideoTrailerBinding.inflate(layoutInflater)
        setContentView(binding.root)
        val videoUrl = intent.getStringExtra("VIDEO_URL")
        val videoUri = Uri.parse(videoUrl)
        val mediaController = MediaController(this)
        mediaController.setAnchorView(binding.videoViewTrailer)
        binding.videoViewTrailer.setMediaController(mediaController)
        binding.videoViewTrailer.setVideoURI(videoUri)
        binding.videoViewTrailer.start()

        binding.videoViewTrailer.setOnCompletionListener {
           onBackPressedDispatcher.onBackPressed()
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        _binding = null
    }
}